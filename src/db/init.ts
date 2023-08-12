import Session from './models/Session.model';
import User from './models/User.model';
const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

const dbInit = () => {
  User.sync({ alter: isDev, force: true });
  Session.sync();
};

export default dbInit;
