"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("events", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            organiser_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            event_overview: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            event_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            event_photo_url: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            time: {
                type: Sequelize.TIME,
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
    async down(queryInterface) {
        await queryInterface.dropTable("events");
    },
};
//# sourceMappingURL=20240501153813-create-events.js.map