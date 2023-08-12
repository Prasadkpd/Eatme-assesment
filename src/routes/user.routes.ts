import express, { Request, Response } from 'express';
import { validate } from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

const userRouter = express.Router({ mergeParams: true });

const createUser = (req: Request, res: Response) => {
  console.log(req);
  console.log(res);
};

userRouter.route('/').post(validate(createUserSchema), createUser);
