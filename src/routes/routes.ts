import express from 'express';
import sessionRouter from './session.routes';
import userRouter from './user.routes';
import resturentRouter from './resturent.routes';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

apiRouter.use('/users', userRouter);
apiRouter.use('/sessions', sessionRouter);
apiRouter.use('/resturent', resturentRouter);

export default apiRouter;
