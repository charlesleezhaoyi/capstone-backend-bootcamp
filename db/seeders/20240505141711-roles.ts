"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "Owner",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Member",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("roles", {}, {});
  },
};
