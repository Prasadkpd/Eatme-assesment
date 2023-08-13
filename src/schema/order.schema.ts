import { TypeOf, array, number, object, string } from 'zod';

const dishSchema = object({
  dish_id: number(),
  quantity: number(),
  price: number(),
  total: number()
});

export const orderSchema = object({
  body: object({
    resturent_id: number(),
    user_id: string(),
    total: number(),
    dishes: array(dishSchema)
  })
});

export type CreateOrderInput = TypeOf<typeof orderSchema>;
