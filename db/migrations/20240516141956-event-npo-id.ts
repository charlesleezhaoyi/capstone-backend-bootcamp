"use strict";

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.addColumn("events", "npo_id", {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
      await queryInterface.addColumn("events", "location", {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.addColumn("events", "price", {
        type: Sequelize.FLOAT,
        allowNull: true,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.removeColumn("events", "npo_id");
      await queryInterface.removeColumn("events", "location");
      await queryInterface.removeColumn("events", "price");
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
