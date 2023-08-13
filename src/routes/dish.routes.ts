import express from 'express';
import {
  createDishHandler,
  deleteDishHandler,
  getAllDishHandler,
  getDishByIdHandler,
  getDishByResturentHandler
} from '../controllers/dish.controller';
import { validate } from '../middleware/validateResource';
import { dishSchema } from '../schema/dish.schema';

const dishRouter = express.Router({ mergeParams: true });

dishRouter.route('/').post(validate(dishSchema), createDishHandler);

dishRouter.route('/').get(getAllDishHandler);

dishRouter.route('/:id').get(getDishByIdHandler);

dishRouter.route('/:id/resturent').get(getDishByResturentHandler);

dishRouter.route('/:id').put(deleteDishHandler);

dishRouter.route('/:id').delete(deleteDishHandler);

export default dishRouter;
