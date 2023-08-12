import { v4 as uuidv4 } from 'uuid';
import Resturent, { ResturentInput, ResturentOutput } from '../models/Resturent.model';

export const create = async (payload: ResturentInput): Promise<ResturentOutput> => {
  const resturent_id = uuidv4();
  const resturent = await Resturent.create({ ...payload, resturent_id });
  return resturent;
};

export const update = async (
  id: string,
  payload: Partial<ResturentInput>
): Promise<ResturentOutput> => {
  const resturent = await Resturent.findByPk(id);
  if (!Resturent) {
    throw new Error('not found');
  }
  const updatedResturent = await (resturent as Resturent).update(payload);
  return updatedResturent;
};

export const getById = async (id: string): Promise<ResturentOutput> => {
  const resturent = await Resturent.findByPk(id);
  if (!resturent) {
    throw new Error('not found');
  }
  return resturent;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedResturentCount = await Resturent.destroy({
    where: { resturent_id: id }
  });
  return !!deletedResturentCount;
};

export const getAll = async (): Promise<ResturentOutput[]> => {
  return Resturent.findAll();
};
