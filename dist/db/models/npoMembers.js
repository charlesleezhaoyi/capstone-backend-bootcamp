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
exports.NpoMembers = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const members_1 = require("../models/members"); // Import the Members class from the appropriate module
const roles_1 = require("../models/roles");
const npos_1 = require("../models/npos");
let NpoMembers = class NpoMembers extends sequelize_typescript_1.Model {
    // Define the association between the Npos and Members classes
    npo_id;
    member_id;
    role_id;
    open_ended_ans_1;
    open_ended_ans_2;
    open_ended_ans_3;
    npos;
    members;
    roles;
};
exports.NpoMembers = NpoMembers;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => npos_1.Npos),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], NpoMembers.prototype, "npo_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => members_1.Members),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], NpoMembers.prototype, "member_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => roles_1.Roles),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], NpoMembers.prototype, "role_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], NpoMembers.prototype, "open_ended_ans_1", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], NpoMembers.prototype, "open_ended_ans_2", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], NpoMembers.prototype, "open_ended_ans_3", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => npos_1.Npos),
    __metadata("design:type", npos_1.Npos)
], NpoMembers.prototype, "npos", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => members_1.Members),
    __metadata("design:type", members_1.Members)
], NpoMembers.prototype, "members", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => roles_1.Roles),
    __metadata("design:type", roles_1.Roles)
], NpoMembers.prototype, "roles", void 0);
exports.NpoMembers = NpoMembers = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "npo_members",
        modelName: "npo_members",
        underscored: true,
        timestamps: true,
    })
], NpoMembers);
//# sourceMappingURL=npoMembers.js.map