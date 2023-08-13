import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';

interface DishAttributes {
  dish_id: number;
  resturent_id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: string;
  rate_count: number;
  is_active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface DishInput extends Optional<DishAttributes, 'dish_id'> {}

export interface DishOutput extends Required<DishAttributes> {}

class Dish extends Model<DishAttributes, DishInput> implements DishAttributes {
  public dish_id!: number;
  public resturent_id!: number;
  public name!: string;
  public price!: string;
  public description!: string;
  public category!: string;
  public image!: string;
  public rating!: string;
  public rate_count!: number;
  public is_active!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Dish.init(
  {
    dish_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    resturent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'Resturents',
        key: 'resturent_id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rate_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
);

export default Dish;
