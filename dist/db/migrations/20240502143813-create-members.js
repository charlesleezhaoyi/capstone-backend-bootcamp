"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("members", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            date_of_birth: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            gender: {
                type: Sequelize.ENUM("male", "female"),
                allowNull: false,
            },
            occupation: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            employee_at: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cv_url: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            portfolio_link_url: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            is_onboarded: {
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("members");
    },
};
//# sourceMappingURL=20240502143813-create-members.js.map