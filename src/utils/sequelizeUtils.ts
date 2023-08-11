import {logger}  from '../utils';
import sequelize from "../../config/db";

export async function authenticateAndSyncDatabase (): Promise<void> {
    try {
        await sequelize.authenticate();
        logger.info('Database connection established');

        await sequelize.sync({ force: false }); 
        logger.info('Database synchronized');
    } catch (error) {
        logger.error('Database error:', error);
    }
}