import { GetAllUsersFilters } from '../db/dal/types';
import * as UserDal from '../db/dal/user.dal';
import { UserInput, UserOutput } from '../db/models/User.model';

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
