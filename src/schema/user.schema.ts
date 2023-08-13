import { object, string, TypeOf } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - first_name
 *        - last_name
 *        - password
 *        - type
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        first_name:
 *          type: string
 *          default: Jane
 *        last_name:
 *          type: string
 *          default: Doe
 *        type:
 *          type: string
 *          default:Customer
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        user_id:
 *          type: string
 *        email:
 *          type: string
 *        first_name:
 *          type: string
 *        last_name:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
export const createUserSchema = object({
  body: object({
    first_name: string({
      required_error: 'First name is required'
    }),
    last_name: string({
      required_error: 'Last name is required'
    }),
    type: string({
      required_error: 'User type is required'
    }),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password too short - should be 6 chars minimum'),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email')
  })
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>;
