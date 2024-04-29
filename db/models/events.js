"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.members, { through: "event_members" });
      this.belongsToMany(models.categories, { through: "event_categories" });
      this.belongsToMany(models.comments, { through: "event_comments" });
    }
  }
  events.init(
    {
      organiser: DataTypes.STRING,
      event_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "events",
      underscored: true,
    }
  );
  return events;
};
