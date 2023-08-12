import Session from './models/Session.model';
import User from './models/User.model';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  User.sync({ alter: isDev, force: false });
  Session.sync({ alter: isDev, force: false });
};

export default dbInit;
