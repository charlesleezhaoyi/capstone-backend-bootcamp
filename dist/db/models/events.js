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
exports.Events = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const members_1 = require("./members");
let Events = class Events extends sequelize_typescript_1.Model {
    // Define the association between the Events and Categories table
    categories;
    // Define the association between the Events and Members table
    members;
    // Define the columns of the Events table
    organiser_id;
    event_overview;
    event_name;
    event_photo_url;
    date;
    time;
};
exports.Events = Events;
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Events, {
        through: "event_categories",
        foreignKey: "event_id",
        otherKey: "category_id",
        as: "Events",
    }),
    __metadata("design:type", Array)
], Events.prototype, "categories", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => members_1.Members, {
        through: "event_members",
        foreignKey: "event_id",
        otherKey: "member_id",
        as: "Events",
    }),
    __metadata("design:type", Array)
], Events.prototype, "members", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Events.prototype, "organiser_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_overview", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_photo_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Events.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TIME,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "time", void 0);
exports.Events = Events = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "events",
        modelName: "events",
        underscored: true,
    })
], Events);
//# sourceMappingURL=events.js.map