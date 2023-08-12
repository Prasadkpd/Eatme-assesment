import express from 'express';
import userRouter from './user.routes';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

apiRouter.use('/users', userRouter);

export default apiRouter;
