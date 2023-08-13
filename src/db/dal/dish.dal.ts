import { Op } from 'sequelize';
import Dish, { DishInput, DishOutput } from '../models/Dish.model';

export const create = async (payload: DishInput): Promise<DishOutput> => {
  const dish = await Dish.create(payload);
  return dish;
};

export const update = async (id: number, payload: Partial<DishInput>): Promise<DishOutput> => {
  const dish = await Dish.findByPk(id);
  if (!Dish) {
    throw new Error('not found');
  }
  const updatedDish = await (dish as Dish).update(payload);
  return updatedDish;
};

export const getById = async (id: number): Promise<DishOutput> => {
  const dish = await Dish.findByPk(id);
  if (!dish) {
    throw new Error('not found');
  }
  return dish;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedDishCount = await Dish.destroy({
    where: { dish_id: id }
  });
  return !!deletedDishCount;
};

export const getAll = async (): Promise<DishOutput[]> => {
  return Dish.findAll();
};

export const getByResturentId = async (resturent_id: number): Promise<DishOutput[]> => {
  const dishes = await Dish.findAll({
    where: {
      resturent_id: {
        [Op.eq]: resturent_id
      },
      is_active: {
        [Op.eq]: true
      }
    }
  });

  return dishes;
};
