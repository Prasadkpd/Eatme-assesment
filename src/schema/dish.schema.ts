import { number, object, string, TypeOf } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    Dish:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        cuisine:
 *          type: string
 *        address:
 *          type: string
 *        city:
 *          type: string
 *        state:
 *          type: string
 *        zip:
 *          type: string
 *        phone_no:
 *          type: string
 */

export const dishSchema = object({
  body: object({
    resturent_id: number({
      required_error: 'Resturent Id is required'
    }),
    name: string({
      required_error: 'Name is required'
    }),
    price: string({
      required_error: 'Price is required'
    }),
    description: string({
      required_error: 'Description is required'
    }),
    category: string({
      required_error: 'Category is required'
    }),
    image: string({
      required_error: 'Image is required'
    }),
    rating: string({
      required_error: 'Rating is required'
    }),
    rate_count: number({
      required_error: 'Rating count is required'
    })
  })
});

export type CreateDishInput = TypeOf<typeof dishSchema>;
