import configurations from 'config';
import express from "express";
import routes from './routes';
import { authenticateAndSyncDatabase, logger } from './utils';

const port = configurations.get<number>('port');

const app = express();

authenticateAndSyncDatabase();

app.listen(port, () => {
  logger.info(`App Server is running at http://localhost:${port}`);
  routes(app);
});
