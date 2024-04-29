"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.npos, { through: "npo_members" });
      this.belongsToMany(models.events, { through: "event_members" });
      this.belongsToMany(models.roles, { through: "member_roles" });
    }
  }
  members.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      is_onboarded: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "members",
      underscored: true,
    }
  );
  return members;
};
