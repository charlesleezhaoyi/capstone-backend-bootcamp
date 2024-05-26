"use strict";

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.addColumn("npos", "url_extension", {
        type: Sequelize.STRING,
        allowNull: false,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.removeColumn("npos", "url_extension");
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
