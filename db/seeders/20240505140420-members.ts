"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("members", [
      {
        full_name: "Owner",
        date_of_birth: new Date("1990-01-01"),
        gender: "male",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: "Admin",
        date_of_birth: new Date("1990-01-01"),
        gender: "male",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: "Member",
        date_of_birth: new Date("1990-01-01"),
        gender: "male",
        occupation: "Software Developer",
        employee_at: "GitHub",
        email: "johndoe@example.com",
        cv_url: "http://example.com/johndoe/cv",
        portfolio_link_url: "http://example.com/johndoe/portfolio",
        is_onboarded: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("members", {}, {});
  },
};
