import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';
import Dish from './Dish.model';

interface ResturentAttributes {
  resturent_id: number;
  name: string;
  cuisine: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone_no: string;
  is_active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResturentInput extends Optional<ResturentAttributes, 'resturent_id'> {}

export interface ResturentOutput extends Required<ResturentAttributes> {}

class Resturent extends Model<ResturentAttributes, ResturentInput> implements ResturentAttributes {
  public resturent_id!: number;
  public name!: string;
  public cuisine!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public phone_no!: string;
  public is_active!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public dishes!: Dish[];
}

Resturent.init(
  {
    resturent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.STRING,
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

Resturent.hasMany(Dish, { foreignKey: 'resturent_id' });

export default Resturent;
