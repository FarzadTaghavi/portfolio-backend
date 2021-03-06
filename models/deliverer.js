"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class deliverer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      deliverer.hasMany(models.order);
    }
  }
  deliverer.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "deliverer",
    }
  );
  return deliverer;
};
