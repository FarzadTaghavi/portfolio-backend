"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class storeType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      storeType.belongsTo(models.storeCategory);
    }
  }
  storeType.init(
    {
      type: DataTypes.STRING,
      storeCategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "storeType",
    }
  );
  return storeType;
};
