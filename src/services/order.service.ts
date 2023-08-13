import * as OrderDal from '../db/dal/order.dal';
import { OrderInput, OrderOutput } from '../db/models/Order.model';
import { OrderDishInput } from '../db/models/OrderDish.model';

export const create = async (
  payload: OrderInput,
  orderDish: OrderDishInput[]
): Promise<OrderOutput> => {
  const createdOrder = OrderDal.create(payload, orderDish);
  return createdOrder;
};

export const update = (id: number, payload: Partial<OrderInput>): Promise<OrderOutput> => {
  return OrderDal.update(id, payload);
};

export const getById = (id: number): Promise<OrderOutput> => {
  return OrderDal.getById(id);
};

export const deleteById = (id: number): Promise<boolean> => {
  return OrderDal.deleteById(id);
};

export const getAll = (): Promise<OrderOutput[]> => {
  return OrderDal.getAll();
};

export const getByResturentId = (id: number): Promise<OrderOutput[]> => {
  return OrderDal.getByResturentId(id);
};
