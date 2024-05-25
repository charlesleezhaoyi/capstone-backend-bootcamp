"use strict";

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.addColumn("event_members", "rsvp", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    try {
      await queryInterface.removeColumn("event_members", "rsvp");
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  },
};
