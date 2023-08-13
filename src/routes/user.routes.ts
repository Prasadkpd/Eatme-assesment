import express from 'express';
import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserByIdHandler,
  updateUserHandler
} from '../controllers/user.contoller';
import { validate } from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

const userRouter = express.Router({ mergeParams: true });

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
userRouter.route('/').post(validate(createUserSchema), createUserHandler);

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tags:
 *     - Users
 *     description: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserOutput'
 */
userRouter.route('/').get(getAllUserHandler);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *     - Users
 *     description: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserOutput'
 *       404:
 *         description: User not found
 */
userRouter.route('/:id').get(getUserByIdHandler);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   put:
 *     tags:
 *     - Users
 *     description: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserOutput'
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid input
 */
userRouter.route('/:id').put(updateUserHandler);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     tags:
 *     - Users
 *     description: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
userRouter.route('/:id').delete(deleteUserHandler);

export default userRouter;
