import config from 'config';
import { get } from 'lodash';
import * as SessionDal from '../db/dal/session.dal';
import * as UserDal from '../db/dal/user.dal';
import { SessionInput, SessionOutput } from '../db/models/Session.model';
import { signJwt, verifyJwt } from '../utils/jwt.utils';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
  const createdSession = SessionDal.create(payload);
  return createdSession;
};

export const update = (id: string, payload: Partial<SessionInput>): Promise<SessionOutput> => {
  return SessionDal.update(id, payload);
};

export const getById = (id: string): Promise<SessionOutput> => {
  return SessionDal.getById(id);
};

export const deleteById = (id: string): Promise<boolean> => {
  return SessionDal.deleteById(id);
};

export const getAll = (): Promise<SessionOutput[]> => {
  return SessionDal.getAll();
};

export const getSessionByUserId = (id: string): Promise<SessionOutput[]> => {
  return SessionDal.getByUserId(id);
};

export const reIssueRefreshToken = async ({
  refreshToken
}: {
  refreshToken: string;
}): Promise<string | boolean> => {
  const { decoded } = verifyJwt(refreshToken);
  if (!decoded || !get(decoded, 'session')) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const session_id = get(decoded, 'session') as string;
  const session = await SessionDal.getById(session_id);

  if (!session || !session.valid) {
    return false;
  }

  if (session.user_id) {
    const user = await UserDal.getById(session.user_id);

    if (!user) {
      return false;
    }

    const accessToken = signJwt(
      { ...user, session: session.session_id },
      { expiresIn: config.get<string>('accessTokenTtl') } // 15 minutes,
    );

    return accessToken;
  }

  return false;
};
