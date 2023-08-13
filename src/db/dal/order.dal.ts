import { Op } from 'sequelize';
import Dish from '../models/Dish.model';
import Order, { OrderInput, OrderOutput } from '../models/Order.model';
import OrderDish, { OrderDishInput } from '../models/OrderDish.model';

export const create = async (
  payload: OrderInput,
  orderDishes: OrderDishInput[]
): Promise<OrderOutput> => {
  const createdOrder = await Order.create(payload);

  const order_id = createdOrder.order_id;
  const orderDishesWithOrderId = orderDishes.map((orderDish) => ({ ...orderDish, order_id }));

  await OrderDish.bulkCreate(orderDishesWithOrderId);

  return createdOrder;
};

export const update = async (id: number, payload: Partial<OrderInput>): Promise<OrderOutput> => {
  const order = await Order.findByPk(id);
  if (!Order) {
    throw new Error('not found');
  }
  const updatedOrder = await (order as Order).update(payload);
  return updatedOrder;
};

export const getById = async (id: number): Promise<OrderOutput> => {
  const order = await Order.findByPk(id, {
    include: [
      {
        model: Dish,
        as: 'dishes'
      }
    ]
  });

  if (!order) {
    throw new Error('Order not found');
  }

  return order;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedOrderCount = await Order.destroy({
    where: { order_id: id }
  });
  return !!deletedOrderCount;
};

export const getAll = async (): Promise<OrderOutput[]> => {
  const orders = await Order.findAll({
    include: [
      {
        model: Dish,
        as: 'dishes'
      }
    ]
  });

  return orders;
};

export const getByResturentId = async (resturent_id: number): Promise<OrderOutput[]> => {
  const orderes = await Order.findAll({
    where: {
      resturent_id: {
        [Op.eq]: resturent_id
      },
      is_active: {
        [Op.eq]: true
      }
    },
    include: [
      {
        model: OrderDish,
        attributes: ['dish_id', 'quantity', 'price', 'total'],
        include: [
          {
            model: Dish,
            attributes: ['name', 'description', 'category', 'image', 'rating', 'rate_count']
          }
        ]
      }
    ]
  });

  return orderes;
};
