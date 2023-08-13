import Dish from '../models/Dish.model';
import Resturent, { ResturentInput, ResturentOutput } from '../models/Resturent.model';

export const create = async (payload: ResturentInput): Promise<ResturentOutput> => {
  const resturent = await Resturent.create(payload);
  return resturent;
};

export const update = async (
  id: number,
  payload: Partial<ResturentInput>
): Promise<ResturentOutput> => {
  const resturent = await Resturent.findByPk(id);
  if (!Resturent) {
    throw new Error('not found');
  }
  const updatedResturent = await (resturent as Resturent).update(payload);
  return updatedResturent;
};

export const getById = async (id: number): Promise<ResturentOutput> => {
  const resturent = await Resturent.findByPk(id);
  if (!resturent) {
    throw new Error('not found');
  }
  return resturent;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedResturentCount = await Resturent.destroy({
    where: { resturent_id: id }
  });
  return !!deletedResturentCount;
};

export const getAll = async (): Promise<ResturentOutput[]> => {
  return Resturent.findAll({
    include: [{ model: Dish }]
  });
};
