import config from 'config';
import { Request, Response } from 'express';
import { create, getSessionByUserId, update } from '../services/session.service';
import { validatePassword } from '../services/user.service';
import { logger } from '../utils';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
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

    return res.send({ accessToken, refreshToken });
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = res.locals.user.user_id;
  const sessions = await getSessionByUserId(userId);

  return res.send(sessions);
}

export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  await update(sessionId, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null
  });
}
