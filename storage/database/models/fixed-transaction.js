"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FixedTransaction extends Model {
    static associate(models) {
      FixedTransaction.belongsTo(models.Account, {
        foreignKey: "accountId",
      });
    }
  }
  FixedTransaction.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      accountId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      dayOfMonth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "FixedTransaction",
      tableName: "fixedTransactions",
      timestamps: false,
    }
  );
  return FixedEvent;
};