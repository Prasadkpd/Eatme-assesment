import Ingredient from './models/User';
const isDev = process.env.NODE_ENV === 'development';
console.log(isDev);

const dbInit = () => {
  Ingredient.sync({ alter: isDev });
};

export default dbInit;
