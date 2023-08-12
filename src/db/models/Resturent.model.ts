import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';

interface ResturentAttributes {
  resturent_id: string;
  name: string;
  cuisine: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone_no: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResturentInput extends Optional<ResturentAttributes, 'resturent_id'> {}

export interface ResturentOutput extends Required<ResturentAttributes> {}

class Resturent extends Model<ResturentAttributes, ResturentInput> implements ResturentAttributes {
  public resturent_id!: string;
  public name!: string;
  public cuisine!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public zip!: string;
  public phone_no!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Resturent.init(
  {
    resturent_id: {
      type: DataTypes.STRING,
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
      allowNull: false,
      unique: true
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
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
);

export default Resturent;
