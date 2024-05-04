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
let Categories = class Categories extends Model {
};
__decorate([
    Column({
        type: DataType.ENUM,
        values: ["Category1", "Category2", "Category3"],
        allowNull: false,
    }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
Categories = __decorate([
    Table({
        tableName: "categories",
        modelName: "categories",
        underscored: true,
        timestamps: true,
    })
], Categories);
export { Categories };
//# sourceMappingURL=categories.js.map