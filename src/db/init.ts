import Dish from './models/Dish.model';
import Order from './models/Order.model';
import OrderDish from './models/OrderDish.model';
import Resturent from './models/Resturent.model';
import Session from './models/Session.model';
import User from './models/User.model';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  User.sync({ alter: isDev, force: false });
  Session.sync({ force: false });
  Resturent.sync({ force: false });
  Dish.sync({ force: false });
  Order.sync({ force: false });
  OrderDish.sync({ force: false });
};

export default dbInit;
