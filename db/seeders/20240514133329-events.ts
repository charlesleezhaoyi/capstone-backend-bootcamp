"use strict";

/** @type {import('sequelize-cli').Migration} */

import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("events", [
      {
        organiser_id: 1,
        event_overview: "Come clean the beaches of Singapore with us",
        event_name: "Beach Cleanup",
        event_photo_url:
          "https://aebc975c.rocketcdn.me/wp-content/uploads/2020/12/plage.jpg",
        date: new Date(),
        time: "08:00AM",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        organiser_id: 1,
        event_overview: "Join us at our annual members meeting",
        event_name: "Annual Party",
        date: new Date(),
        time: "07:00PM",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("events", {}, {});
  },
};
