import axios from 'axios';
import config from 'config';
import { omit } from 'lodash';
import qs from 'qs';
import { GetAllUsersFilters } from '../db/dal/types';
import * as UserDal from '../db/dal/user.dal';
import { UserInput, UserOutput } from '../db/models/User.model';
import { logger } from '../utils';
import { verifyPassword } from '../utils/passwordUtils';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const createdUser = UserDal.create(payload);
  return createdUser;
};

export const update = (id: string, payload: Partial<UserInput>): Promise<UserOutput> => {
  return UserDal.update(id, payload);
};

export const getById = (user_id: string): Promise<UserOutput> => {
  return UserDal.getById(user_id);
};

export const deleteById = (id: string): Promise<boolean> => {
  return UserDal.deleteById(id);
};

export const getAll = (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
  return UserDal.getAll(filters);
};

export const validatePassword = async ({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<UserOutput | null> => {
  const user = await UserDal.getByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) return null;

  return omit(user.toJSON(), 'password');
};

export const getGoogleOAuthTokens = async ({ code }: { code: string }) => {
  const url = 'https://oauth2.googleapis.com/token';

  const values = {
    code,
    client_id: config.get('googleClientId'),
    client_secret: config.get('googleClientSecret'),
    redirect_uri: config.get('googleOAuthRedirectUri'),
    grant_type: 'authorization_code'
  };
  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return res.data;
  } catch (e: any) {
    logger.error(e, 'Failed to fetch google OAuth Tokens');
    throw new Error(e.message);
  }
};

interface GoogleUserResult {
  id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
}

export const getGoogleUser = async ({
  id_token,
  access_token
}: {
  id_token: string;
  access_token: string;
}): Promise<GoogleUserResult> => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`
        }
      }
    );
    return res.data;
  } catch (error: any) {
    logger.error(error, 'Error or fetching Google User');
    throw new Error(error);
  }
};

export const getUserByEmail = async (email: string): Promise<UserOutput | null> => {
  return UserDal.getByEmail(email);
};

export const findAndUpdateByEmail = async (
  email: string,
  payload: Partial<UserInput>
): Promise<UserOutput | null> => {
  const user = await UserDal.getByEmail(email);

  if (!user) {
    const user = await UserDal.create(payload);
    return user;
  }

  const updatedUser = await UserDal.update(user.user_id, payload);
  return updatedUser;
};
