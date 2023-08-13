import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

config();

const sequelizeConnection = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  // logging: false,
  logQueryParameters: true
});

export default sequelizeConnection;
