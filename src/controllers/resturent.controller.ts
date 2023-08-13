import { Request, Response } from 'express';
import { CreateRestaurantInput } from '../schema/resturent.schema';
import { create, getAll, getById, update } from '../services/resturent.service';
import logger from '../utils/logger';

export async function createResturentHandler(
  req: Request<object, object, CreateRestaurantInput['body']>,
  res: Response
) {
  try {
    const resturent = await create(req.body);
    return res.send(resturent);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function getResturentByIdHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const resturent = await getById(id);
    return res.send(resturent);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllResturentHandler(req: Request, res: Response) {
  try {
    const resturents = await getAll();
    return res.send(resturents);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function updateResturentHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const resturent = await update(id, req.body);
    return res.send(resturent);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function deleteResturentHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const resturent = await update(id, { is_active: false });
    return res.send(resturent);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
