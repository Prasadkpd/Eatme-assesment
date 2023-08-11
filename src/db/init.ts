import User from './models/User';
const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

const dbInit = () => {
  User.sync({ alter: isDev, force: true });
};

export default dbInit;
