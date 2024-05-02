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
let Npos = class Npos extends Model {
};
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Npos.prototype, "name", void 0);
__decorate([
    Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Npos.prototype, "event_module", void 0);
__decorate([
    Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], Npos.prototype, "discussion_module", void 0);
__decorate([
    Column({
        type: DataType.ENUM,
        values: ["free", "basic", "premium"],
        allowNull: false,
    }),
    __metadata("design:type", String)
], Npos.prototype, "membership_mgmt", void 0);
Npos = __decorate([
    Table({
        tableName: "npos",
        modelName: "npos",
        underscored: true,
    })
], Npos);
export { Npos };
//# sourceMappingURL=npos.js.map