"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("npo_members", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            npo_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "npos", // name of the table
                    key: "id",
                },
            },
            member_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "members", // name of the table
                    key: "id",
                },
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "roles", // name of the table
                    key: "id",
                },
            },
            open_ended_ans_1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            open_ended_ans_2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            open_ended_ans_3: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("npo_members");
    },
};
//# sourceMappingURL=20240505062457-create-npo-members.js.map