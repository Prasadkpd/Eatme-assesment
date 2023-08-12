import { GetAllUsersFilters } from '../db/dal/types';
import * as UserDal from '../db/dal/user';
import { UserInput, UserOuput } from '../db/models/User';

export const create = (payload: UserInput): Promise<UserOuput> => {
  return UserDal.create(payload);
};

export const update = (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
  return UserDal.update(id, payload);
};

export const getById = (id: number): Promise<UserOuput> => {
  return UserDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return UserDal.deleteById(id);
};

export const getAll = (filters: GetAllUsersFilters): Promise<UserOuput[]> => {
  return UserDal.getAll(filters);
};
