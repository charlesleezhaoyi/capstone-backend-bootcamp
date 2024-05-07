"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("members", [
      {
        full_name: "Micheal Moo",
        date_of_birth: new Date("1990-01-01"),
        gender: "male",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: "Victor Van Voss",
        date_of_birth: new Date("1990-01-01"),
        gender: "male",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: "Suzy Soh",
        date_of_birth: new Date("1990-01-01"),
        gender: "female",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("members", {}, {});
  },
};
