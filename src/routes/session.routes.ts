import express from 'express';
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionHandler,
  googleOAuthHandler
} from '../controllers/session.controller';
import requireUser from '../middleware/requireUser';
import { validate } from '../middleware/validateResource';
import { createSessionSchema } from '../schema/session.schema';

const sessionRouter = express.Router({ mergeParams: true });

sessionRouter.route('/').post(validate(createSessionSchema), createUserSessionHandler);
sessionRouter.route('/').get(requireUser, getUserSessionHandler);
sessionRouter.route('/oauth/google').get(googleOAuthHandler);
sessionRouter.route('/').delete(requireUser, deleteSessionHandler);

export default sessionRouter;
