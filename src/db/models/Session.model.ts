import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../../config/db';

interface SessionAttributes {
  user_id: string;
  valid: boolean;
  user_agent: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SessionInput
  extends Optional<SessionAttributes, 'createdAt' | 'updatedAt' | 'valid'> {}
export interface SessionOutput extends Required<SessionAttributes> {}

class Session extends Model<SessionAttributes, SessionInput> implements SessionAttributes {
  public user_id!: string;
  public user_agent!: string;
  public valid!: boolean;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Session.init(
  {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'user_id'
      }
    },
    user_agent: {
      type: DataTypes.STRING
    },
    valid: {
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

export default Session;
