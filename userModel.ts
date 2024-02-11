import { Sequelize,DataTypes } from "sequelize";
import {sequelize} from "../config/db1";
export const User = sequelize.define("user", {
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING(64),
      validate: {
        is: /^[0-9a-f]{64}$/i
      }
    }
  });
  
  (async () => {
    await sequelize.sync({ force: true });
  
  })();