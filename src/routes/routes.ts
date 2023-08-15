import express from 'express';
import dishRouter from './dish.routes';
import orderRouter from './order.routes';
import resturentRouter from './resturent.routes';
import sessionRouter from './session.routes';
import userRouter from './user.routes';

const apiRouter = express.Router();

/**
 * @openapi
 * /api/v1/healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
apiRouter.get('/healthcheck', (req, res) => {
  res.send('Welcome to the API!');
});

apiRouter.use('/users', userRouter);
apiRouter.use('/sessions', sessionRouter);
apiRouter.use('/resturent', resturentRouter);
apiRouter.use('/dish', dishRouter);
apiRouter.use('/order', orderRouter);

export default apiRouter;
