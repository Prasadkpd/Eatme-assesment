import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';
import Session from './Session.model';

type UserType = 'Customer' | 'Admin';

interface UserAttributes {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  is_active?: boolean;
  user_type?: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
type UserOutputFields = Exclude<keyof UserAttributes, 'password'>;
export type UserOutput = Pick<UserAttributes, UserOutputFields>;
export type UserInput = Optional<UserAttributes, 'user_id'>;

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public user_id!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public is_active!: boolean;
  public user_type!: UserType;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    user_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Customer'
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
);

User.hasOne(Session, { foreignKey: 'user_id' });

export default User;
