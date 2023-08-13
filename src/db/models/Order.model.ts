import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';
import OrderDish from './OrderDish.model';

enum OrderStatus {
  Pending = 'Pending',
  InProgress = 'Inprogress',
  Completed = 'Completed',
  Canceled = 'Canceled'
}

interface OrderAttributes {
  order_id: number;
  resturent_id: number;
  user_id: string;
  total: number;
  status: OrderStatus;
  is_active: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface OrderInput
  extends Optional<OrderAttributes, 'order_id' | 'status' | 'is_active'> {}

export interface OrderOutput extends Required<OrderAttributes> {
  orderDishes: OrderDish[];
}

class Order extends Model<OrderAttributes, OrderInput> implements OrderAttributes {
  public order_id!: number;
  public resturent_id!: number;
  public user_id!: string;
  public total!: number;
  public status!: OrderStatus;
  public is_active!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public orderDishes!: OrderDish[];
}

Order.init(
  {
    order_id: {
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
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: OrderStatus.Pending
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

Order.hasMany(OrderDish, { foreignKey: 'order_id' });

export default Order;
