import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import User, { UserInput, UserOutput } from '../models/User.model';
import { GetAllUsersFilters } from './types';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const { email } = payload;

  const existingUser = await User.findOne({
    where: {
      email: {
        [Op.eq]: email
      }
    }
  });

  if (existingUser) {
    throw new Error('Email already exists');
  }
  const user_id = uuidv4();

  const user = await User.create({
    ...payload,
    user_id
  });

  return user;
};

export const update = async (id: string, payload: Partial<UserInput>): Promise<UserOutput> => {
  const user = await User.findByPk(id);
  if (!User) {
    throw new Error('not found');
  }
  const updatedUser = await (user as User).update(payload);
  return updatedUser;
};

export const getById = async (id: string): Promise<UserOutput> => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('not found');
  }
  return user;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedUserCount = await User.destroy({
    where: { user_id: id }
  });
  return !!deletedUserCount;
};

export const getAll = async (filters?: GetAllUsersFilters): Promise<UserOutput[]> => {
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
