import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';

type UserType = 'Customer' | 'Admin';

interface UserAttributes {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_active?: boolean;
  user_type?: UserType;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export type UserInput = Optional<UserAttributes, 'user_id'>;
export type UserOuput = Required<UserAttributes>;

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public user_id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
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
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
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

export default User;
