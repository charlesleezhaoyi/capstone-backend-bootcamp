"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "Owner",
      },
      {
        name: "Admin",
      },
      {
        name: "Member",
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("roles", {}, {});
  },
};
