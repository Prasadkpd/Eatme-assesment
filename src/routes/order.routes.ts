import express from 'express';
import {
  createOrderHandler,
  deleteOrderHandler,
  getAllOrderHandler,
  getOrderByIdHandler,
  getOrderByResturentHandler
} from '../controllers/order.controller';
import { validate } from '../middleware/validateResource';
import { orderSchema } from '../schema/order.schema';

const orderRouter = express.Router({ mergeParams: true });

orderRouter.route('/').post(validate(orderSchema), createOrderHandler);

orderRouter.route('/').get(getAllOrderHandler);

orderRouter.route('/:id').get(getOrderByIdHandler);

orderRouter.route('/:id/resturent').get(getOrderByResturentHandler);

orderRouter.route('/:id').put(deleteOrderHandler);

orderRouter.route('/:id').delete(deleteOrderHandler);

export default orderRouter;
