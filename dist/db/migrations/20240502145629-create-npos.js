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
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable("npos", {
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
                    type: Sequelize.ENUM(),
                    allowNull: false,
                },
                company_website_url: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                country_incorporated: {
                    type: Sequelize.ENUM(),
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
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable("npos");
        });
    },
};
export {};
//# sourceMappingURL=20240502145629-create-npos.js.map