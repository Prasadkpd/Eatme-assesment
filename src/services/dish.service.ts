import * as DishDal from '../db/dal/dish.dal';
import { DishInput, DishOutput } from '../db/models/Dish.model';

export const create = async (payload: DishInput): Promise<DishOutput> => {
  const createdDish = DishDal.create(payload);
  return createdDish;
};

export const update = (id: number, payload: Partial<DishInput>): Promise<DishOutput> => {
  return DishDal.update(id, payload);
};

export const getById = (id: number): Promise<DishOutput> => {
  return DishDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return DishDal.deleteById(id);
};

export const getAll = (): Promise<DishOutput[]> => {
  return DishDal.getAll();
};

export const getByResturentId = (id: number): Promise<DishOutput[]> => {
  return DishDal.getByResturentId(id);
};
