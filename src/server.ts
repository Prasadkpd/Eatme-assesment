import bodyParser from 'body-parser';
import configurations from 'config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { deserializeUser } from './middleware/deserializeUser';
import apiRouter from './routes/routes';
import { authenticateAndSyncDatabase, logger } from './utils';
import swaggerDocs from './utils/swagger';

const port = configurations.get<number>('port');

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(deserializeUser);

app.use('/api/v1', apiRouter);

authenticateAndSyncDatabase();

swaggerDocs(app, port);
app.listen(port, () => {
  logger.info(`App Server is running at http://localhost:${port}`);
});
