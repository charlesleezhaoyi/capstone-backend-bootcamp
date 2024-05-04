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
import { Model, Table, Column, DataType } from "sequelize-typescript";
let Events = class Events extends Model {
};
__decorate([
    Column({
        type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Events.prototype, "organiser_id", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_overview", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_name", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Events.prototype, "event_photo_url", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Events.prototype, "date", void 0);
__decorate([
    Column({
        type: DataType.TIME,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Events.prototype, "time", void 0);
Events = __decorate([
    Table({
        tableName: "events",
        modelName: "events",
        underscored: true,
    })
], Events);
export { Events };
//# sourceMappingURL=events.js.map