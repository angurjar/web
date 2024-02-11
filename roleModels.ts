import { Sequelize, DataTypes } from 'sequelize';

export const Roles = (Sequelize: any, DataTypes: any, sequelize: any) => {
  return sequelize.define("roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
};

