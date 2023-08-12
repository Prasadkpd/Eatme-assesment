import express from 'express';
import { createUserHandler, getAllUserHandler } from '../controllers/user.contoller';
import { validate } from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

const userRouter = express.Router({ mergeParams: true });

userRouter.route('/').post(validate(createUserSchema), createUserHandler);

userRouter.route('/').get(getAllUserHandler);

export default userRouter;
