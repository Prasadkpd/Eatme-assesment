import config from 'config';
import { CookieOptions, Request, Response } from 'express';
import { create, getSessionByUserId, update } from '../services/session.service';
import {
  findAndUpdateByEmail,
  getGoogleOAuthTokens,
  getGoogleUser,
  validatePassword
} from '../services/user.service';
import { logger } from '../utils';
import { signJwt } from '../utils/jwt.utils';

const accessTokenCookieOption: CookieOptions = {
  maxAge: 900000,
  httpOnly: true,
  domain: 'localhost',
  path: '/',
  sameSite: 'lax',
  secure: false
};

const refreshTokenCookieOption = {
  ...accessTokenCookieOption,
  maxAge: 3.154e10
};

export async function createUserSessionHandler (req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const session = await create({
      user_id: user.user_id,
      user_agent: req.get('user-agent') || ''
    });

    const accessToken = signJwt(
      { ...user, session: session.session_id },
      { expiresIn: config.get<string>('accessTokenTtl') } // 15 minutes,
    );

    const refreshToken = signJwt(
      { ...user, session: session.session_id },
      { expiresIn: config.get('refreshTokenTtl') }
    );

    res.cookie('accessToken', accessToken, accessTokenCookieOption);

    res.cookie('refreshToken', refreshToken, refreshTokenCookieOption);

    return res.send({ accessToken, refreshToken });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserSessionHandler (req: Request, res: Response) {
  const userId = res.locals.user.user_id;
  const sessions = await getSessionByUserId(userId);

  return res.send(sessions);
}

export async function deleteSessionHandler (req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await update(sessionId, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null
  });
}

export async function googleOAuthHandler (req: Request, res: Response) {
  try {
    const code = req.query.code as string;
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });
    console.log({ id_token, access_token });
    const googleUser = await getGoogleUser({ id_token, access_token });

    const userInput = {
      email: googleUser?.email ?? '',
      first_name: googleUser?.given_name ?? '',
      last_name: googleUser?.family_name ?? '',
      type: 'Customer',
      password: ''
    };

    const user = await findAndUpdateByEmail(userInput.email, userInput);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const session = await create({
      user_id: user.user_id,
      user_agent: req.get('user-agent') || ''
    });

    const accessToken = signJwt(
      { ...user, session: session.session_id },
      { expiresIn: config.get<string>('accessTokenTtl') }
    );

    const refreshToken = signJwt(
      { ...user, session: session.session_id },
      { expiresIn: config.get('refreshTokenTtl') }
    );

    res.cookie('accessToken', accessToken, accessTokenCookieOption);

    res.cookie('refreshToken', refreshToken, refreshTokenCookieOption);

    return res.redirect(config.get('origin'));
  } catch (error: any) {
    logger.error('Failed to get access token');
    return res.redirect(`${config.get('origin')}/oauth/error`);
  }
}
