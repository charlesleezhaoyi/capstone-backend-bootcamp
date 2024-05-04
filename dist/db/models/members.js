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
let Members = class Members extends Model {
};
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "full_name", void 0);
__decorate([
    Column({
        type: DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Members.prototype, "date_of_birth", void 0);
__decorate([
    Column({
        type: DataType.ENUM("female", "male"),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "gender", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "occupation", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "employee_at", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    }),
    __metadata("design:type", String)
], Members.prototype, "email", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "cv_url", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "portfolio_link_url", void 0);
__decorate([
    Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Members.prototype, "is_onboarded", void 0);
Members = __decorate([
    Table({
        tableName: "members",
        modelName: "members",
        underscored: true,
    })
], Members);
export { Members };
//# sourceMappingURL=members.js.map