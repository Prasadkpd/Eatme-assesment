import express from 'express';
import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserByIdHandler
} from '../controllers/user.contoller';
import { validate } from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

const userRouter = express.Router({ mergeParams: true });

userRouter.route('/').post(validate(createUserSchema), createUserHandler);

userRouter.route('/').get(getAllUserHandler);

userRouter.route('/:id').get(getUserByIdHandler);

userRouter.route('/:id').put(deleteUserHandler);

userRouter.route('/:id').delete(deleteUserHandler);

export default userRouter;
