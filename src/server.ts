import bodyParser from 'body-parser';
import configurations from 'config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { authenticateAndSyncDatabase, logger } from './utils';

const port = configurations.get<number>('port');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', apiRouter);
authenticateAndSyncDatabase();

app.listen(port, () => {
  logger.info(`App Server is running at http://localhost:${port}`);
});
