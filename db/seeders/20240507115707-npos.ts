"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("npos", [
      {
        name: "Shellter",
        url_extension: "shellter",
        key_activities: "Environment",
        company_website_url: "www.shellter.com",
        country_incorporated: "Singapore",
        company_description:
          "We are Shellter, Singapore's vibrant community of evironmental activists that aim to clean up the beaches of the world, starting here in Singapore",
        company_size: "11-30",
        company_logo_url: "www.shellter.com/logo",
        acra_url: "www.acra.org/cert/1",
        open_ended_qn_1: "Which country are you currently living in?",
        is_whitelabelled: false,
        event_module: true,
        discussion_module: true,
        membership_mgmt: "premium",
        is_verified: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Dogtors",
        url_extension: "dogtors",
        key_activities: "Healthcare",
        company_website_url: "www.dogtors.com",
        country_incorporated: "Malaysia",
        company_description:
          "All dogs deserve healthcare! You can help to make this a reality by supporting our events",
        company_size: "31-50",
        company_logo_url: "www.dogtor.com/logo",
        acra_url: "www.acra.org/cert/2",
        open_ended_qn_1: "Do you have experience in vetenary practices?",
        is_whitelabelled: true,
        event_module: true,
        discussion_module: false,
        membership_mgmt: "rulebased",
        is_verified: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("npos", {}, {});
  },
};
