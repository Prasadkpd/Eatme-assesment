import express from "express";
import configurations from "config";
import {logger, authenticateAndSyncDatabase} from './utils'
import routes from "./routes";

const port = configurations.get<number>('port');

const app = express();

authenticateAndSyncDatabase();

app.listen(port, ()=> {
    logger.info(`App is running at http://localhost:${port}`);
    routes(app);
})