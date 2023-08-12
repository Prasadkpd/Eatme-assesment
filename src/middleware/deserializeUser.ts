import { NextFunction, Request, Response } from 'express';
import { get } from 'lodash';
import { reIssueRefreshToken } from '../services/session.service';
import { verifyJwt } from '../utils/jwt.utils';

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  const refreshToken = get(req, 'headers.x-refresh');

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const newAccessToken = await reIssueRefreshToken({ refreshToken });
    if (newAccessToken && typeof newAccessToken === 'string') {
      res.setHeader('x-access-token', newAccessToken);

      const result = verifyJwt(newAccessToken);
      res.locals.user = result.decoded;
      return next();
    }
  }
  return next();
};
