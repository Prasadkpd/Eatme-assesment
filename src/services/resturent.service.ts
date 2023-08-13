import * as ResturentDal from '../db/dal/resturent.dal';
import { ResturentInput, ResturentOutput } from '../db/models/Resturent.model';

export const create = async (payload: ResturentInput): Promise<ResturentOutput> => {
  const createdResturent = ResturentDal.create(payload);
  return createdResturent;
};

export const update = (id: number, payload: Partial<ResturentInput>): Promise<ResturentOutput> => {
  return ResturentDal.update(id, payload);
};

export const getById = (id: number): Promise<ResturentOutput> => {
  return ResturentDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return ResturentDal.deleteById(id);
};

export const getAll = (): Promise<ResturentOutput[]> => {
  return ResturentDal.getAll();
};
