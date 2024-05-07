"use strict";

/** @type {import('sequelize-cli').Migration} */
import { QueryInterface, DataTypes } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("npo_members", [
      {
        npo_id: 1,
        member_id: 1,
        role_id: 1,
        open_ended_ans_1: "Singapore",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        npo_id: 1,
        member_id: 2,
        role_id: 2,
        open_ended_ans_1: "Singapore",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        npo_id: 1,
        member_id: 3,
        role_id: 3,
        open_ended_ans_1: "Malaysia",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        npo_id: 2,
        member_id: 2,
        role_id: 3,
        open_ended_ans_1: "Singapore",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        npo_id: 2,
        member_id: 3,
        role_id: 1,
        open_ended_ans_1: "Malaysia",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("npo_members", {}, {});
  },
};
