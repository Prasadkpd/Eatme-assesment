import sequelize from '../../config/db';
import { logger } from '../utils';

export const authenticateAndSyncDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    logger.info('Database connection established');

    await sequelize.sync({ force: false });
    logger.info('Database synchronized');
  } catch (error) {
    logger.error('Database error:', error);
  }
};
