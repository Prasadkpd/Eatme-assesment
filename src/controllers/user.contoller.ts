import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { create, getAll, getById } from '../services/user.service';
import logger from '../utils/logger';
import { hashPassword } from '../utils/passwordUtils';

export async function createUserHandler(
  req: Request<object, object, CreateUserInput['body']>,
  res: Response
) {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await create({
      ...rest,
      password: hashedPassword
    });
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function getUserByIdHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await getById(id);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {
    const users = await getAll({});
    return res.send(users);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
