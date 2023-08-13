import Dish from './models/Dish.model';
import Resturent from './models/Resturent.model';
import Session from './models/Session.model';
import User from './models/User.model';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  User.sync({ alter: isDev, force: false });
  Session.sync({ alter: isDev, force: false });
  Resturent.sync({ alter: true, force: false });
  Dish.sync({ alter: true, force: true });
};

export default dbInit;
