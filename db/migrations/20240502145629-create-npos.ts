"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable("npos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      key_activities: {
        type: Sequelize.ENUM(
          "Education",
          "Healthcare",
          "Environment",
          "Social Services",
          "Others"
        ),
        allowNull: false,
      },
      company_website_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country_incorporated: {
        type: Sequelize.ENUM("Singapore", "Malaysia"),
        allowNull: false,
      },
      company_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_size: {
        type: Sequelize.ENUM("1-10", "11-30", "31-50"),
        allowNull: false,
      },
      company_logo_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      acra_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      open_ended_qn_1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      open_ended_qn_2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      open_ended_qn_3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_whitelabelled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      event_module: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      discussion_module: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      membership_mgmt: {
        type: Sequelize.ENUM("premium", "rulebased"),
        allowNull: false,
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable("npos");
  },
};
