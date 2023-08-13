import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';
import Dish from './Dish.model';

interface OrderDishAttributes {
  order_dish_id: number;
  order_id: number;
  dish_id: number;
  quantity: number;
  price: number;
  total: number;
  is_active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface OrderDishInput
  extends Optional<OrderDishAttributes, 'is_active' | 'order_dish_id'> { }

export interface OrderDishOutput extends Required<OrderDishAttributes> {
  dish: Dish;
}

class OrderDish extends Model<OrderDishAttributes, OrderDishInput> implements OrderDishAttributes {
  public order_dish_id!: number;
  public order_id!: number;
  public dish_id!: number;
  public quantity!: number;
  public price!: number;
  public total!: number;
  public is_active!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public dish!: Dish;
}

OrderDish.init(
  {
    order_dish_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'Orders',
        key: 'order_id'
      }
    },
    dish_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'Dishes',
        key: 'dish_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
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

export default OrderDish;
