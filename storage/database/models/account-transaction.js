"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AccountTransaction extends Model {
    static associate(models) {
      AccountTransaction.belongsTo(models.Account, {
        foreignKey: "accountId",
      });
    }
  }
  AccountTransaction.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      accountId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        defaultValue: "active",
        type: DataTypes.STRING,
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
      effectiveDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      statusChangedAt: {
        defaultValue: null,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "AccountTransaction",
      tableName: "accountTransactions",
      timestamps: false,
    }
  );
  return AccountTransaction;
};
