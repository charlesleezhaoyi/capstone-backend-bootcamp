"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable("members", {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable("members");
        });
    },
};
export {};
//# sourceMappingURL=20240502153813-create-members.js.map