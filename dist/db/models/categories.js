"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const events_1 = require("./events");
let Categories = class Categories extends sequelize_typescript_1.Model {
    // Define the association between the Events and Categories table
    events;
    // Define the columns of the Categories table
    name;
};
exports.Categories = Categories;
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => events_1.Events, {
        through: "event_categories",
        foreignKey: "category_id",
        otherKey: "event_id",
        as: "Events",
    }),
    __metadata("design:type", Array)
], Categories.prototype, "events", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ["Category1", "Category2", "Category3"],
        allowNull: false,
    }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
exports.Categories = Categories = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "categories",
        modelName: "categories",
        underscored: true,
        timestamps: true,
    })
], Categories);
//# sourceMappingURL=categories.js.map