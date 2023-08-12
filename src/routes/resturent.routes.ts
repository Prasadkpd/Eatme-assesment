import express from 'express';
import {
  createResturentHandler,
  deleteResturentHandler,
  getAllResturentHandler,
  getResturentByIdHandler
} from '../controllers/resturent.controller';
import { validate } from '../middleware/validateResource';
import { restaurantSchema } from '../schema/resturent.schema';

const resturentRouter = express.Router({ mergeParams: true });

resturentRouter.route('/').post(validate(restaurantSchema), createResturentHandler);

resturentRouter.route('/').get(getAllResturentHandler);

resturentRouter.route('/:id').get(getResturentByIdHandler);

resturentRouter.route('/:id').put(deleteResturentHandler);

resturentRouter.route('/:id').delete(deleteResturentHandler);

export default resturentRouter;
