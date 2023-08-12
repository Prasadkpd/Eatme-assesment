import { object, string, TypeOf } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    Restaurant:
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

export const restaurantSchema = object({
  name: string({
    required_error: 'Name is required'
  }),
  cuisine: string({
    required_error: 'Cuisine is required'
  }),
  address: string({
    required_error: 'Address is required'
  }),
  city: string({
    required_error: 'City is required'
  }),
  state: string({
    required_error: 'State is required'
  }),
  zip: string({
    required_error: 'Zip code is required'
  }),
  phone_no: string({
    required_error: 'Phone number is required'
  })
});

export type CreateRestaurantInput = TypeOf<typeof restaurantSchema>;
