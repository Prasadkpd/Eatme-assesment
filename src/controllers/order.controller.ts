import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateOrderInput } from '../schema/order.schema';
import { create, getAll, getById, getByResturentId, update } from '../services/order.service';
import logger from '../utils/logger';

export async function createOrderHandler(
  req: Request<object, object, CreateOrderInput['body']>,
  res: Response
) {
  try {
    const payload = omit(req.body, 'dishes');
    const dishes = req.body.dishes;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const order = await create(payload, dishes);
    return res.send(order);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
export async function getOrderByIdHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const order = await getById(id);
    return res.send(order);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getOrderByResturentHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const order = await getByResturentId(id);
    return res.send(order);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllOrderHandler(req: Request, res: Response) {
  try {
    const orders = await getAll();
    return res.send(orders);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function updateOrderHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const order = await update(id, req.body);
    return res.send(order);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function deleteOrderHandler(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const order = await update(id, { is_active: false });
    return res.send(order);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
