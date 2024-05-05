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
exports.Members = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const npoMembers_1 = require("./npoMembers");
const events_1 = require("./events");
let Members = class Members extends sequelize_typescript_1.Model {
    // Define the association between the Npos and Members table
    npoMembers;
    // Define the association between Members and Events table
    events;
    // Define the columns of the Members table
    full_name;
    date_of_birth;
    gender;
    occupation;
    employee_at;
    email;
    cv_url;
    portfolio_link_url;
    is_onboarded;
};
exports.Members = Members;
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => npoMembers_1.NpoMembers),
    __metadata("design:type", Array)
], Members.prototype, "npoMembers", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => events_1.Events, {
        through: "event_members",
        foreignKey: "member_id",
        otherKey: "event_id",
        as: "Events",
    }),
    __metadata("design:type", Array)
], Members.prototype, "events", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "full_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Members.prototype, "date_of_birth", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("female", "male"),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "gender", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Members.prototype, "occupation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "employee_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    }),
    __metadata("design:type", String)
], Members.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "cv_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Members.prototype, "portfolio_link_url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Members.prototype, "is_onboarded", void 0);
exports.Members = Members = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "members",
        modelName: "members",
        underscored: true,
    })
], Members);
//# sourceMappingURL=members.js.map