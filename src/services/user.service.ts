import { GetAllUsersFilters } from '../db/dal/types';
import * as UserDal from '../db/dal/user.dal';
import { UserInput, UserOutput } from '../db/models/User.model';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const createdUser = UserDal.create(payload);
  return createdUser;
};

export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
  return UserDal.update(id, payload);
};

export const getById = (id: number): Promise<UserOutput> => {
  return UserDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return UserDal.deleteById(id);
};

export const getAll = (filters: GetAllUsersFilters): Promise<UserOutput[]> => {
  return UserDal.getAll(filters);
};
