import sequelizeConnection from '../../config/db';
import dbInit from '../db/init';
import { logger } from '../utils';

export const authenticateAndSyncDatabase = async (): Promise<void> => {
  try {
    await sequelizeConnection.authenticate();
    logger.info('Database connection established');
    dbInit();
    await sequelizeConnection.sync({ force: false });
    logger.info('Database synchronized');
  } catch (error) {
    logger.error('Database error:', error);
  }
};
