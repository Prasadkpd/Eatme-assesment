import { GetAllIngredientsFilters } from '../db/dal/types';
import * as ingredientDal from '../db/dal/user';
import { IngredientInput, IngredientOuput } from '../db/models/User';

export const create = (payload: IngredientInput): Promise<IngredientOuput> => {
  return ingredientDal.create(payload);
};
export const update = (id: number, payload: Partial<IngredientInput>): Promise<IngredientOuput> => {
  return ingredientDal.update(id, payload);
};
export const getById = (id: number): Promise<IngredientOuput> => {
  return ingredientDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return ingredientDal.deleteById(id);
};
export const getAll = (filters: GetAllIngredientsFilters): Promise<IngredientOuput[]> => {
  return ingredientDal.getAll(filters);
};
