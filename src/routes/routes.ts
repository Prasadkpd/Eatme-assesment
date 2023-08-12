import express, { Express, Request, Response } from 'express';

const apiRouter = express.Router();

apiRouter.use('/users', userRouter);

export default apiRouter;
