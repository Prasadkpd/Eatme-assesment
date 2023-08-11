import { Op } from 'sequelize';
import User, { UserInput, UserOuput } from '../models/User';
import { GetAllUsersFilters } from './types';

export const create = async (payload: UserInput): Promise<UserOuput> => {
  const user = await User.create(payload);
  return user;
};

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOuput> => {
  const user = await User.findByPk(id);
  if (!User) {
    throw new Error('not found');
  }
  const updatedUser = await (user as User).update(payload);
  return updatedUser;
};

export const getById = async (id: number): Promise<UserOuput> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('not found');
  }
  return user;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedUserCount = await User.destroy({
    where: { user_id: id }
  });
  return !!deletedUserCount;
};

export const getAll = async (filters?: GetAllUsersFilters): Promise<UserOuput[]> => {
  let whereClause = {};

  if (filters?.isInActive) {
    whereClause = {
      ...whereClause,
      deletedAt: { [Op.not]: null }
    };
  }

  return User.findAll({
    where: whereClause,
    ...(filters?.isInActive || filters?.includeInActive ? { paranoid: true } : {})
  });
};
