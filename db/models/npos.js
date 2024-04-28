'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class npos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  npos.init({
    name: DataTypes.STRING,
    event_module: DataTypes.BOOLEAN,
    discussion_module: DataTypes.BOOLEAN,
    membership_mgmt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'npos',
  });
  return npos;
};