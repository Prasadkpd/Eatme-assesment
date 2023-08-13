import { Request, Response } from 'express';
import { CreateDishInput } from '../schema/dish.schema';
import { create, getAll, getById, getByResturentId, update } from '../services/dish.service';
import logger from '../utils/logger';

export async function createDishHandler(
  req: Request<object, object, CreateDishInput>,
  res: Response
) {
  try {
    const dishData = req.body;
    const dish = await create(dishData);
    return res.send(dish);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function getDishByIdHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const dish = await getById(id);
    return res.send(dish);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getDishByResturentHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const dish = await getByResturentId(id);
    return res.send(dish);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllDishHandler(req: Request, res: Response) {
  try {
    const dishs = await getAll();
    return res.send(dishs);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function updateDishHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const dish = await update(id, req.body);
    return res.send(dish);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function deleteDishHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const dish = await update(id, { is_active: false });
    return res.send(dish);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
