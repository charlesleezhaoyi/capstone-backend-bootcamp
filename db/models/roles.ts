"use strict";

import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { NpoMembers } from "./npoMembers";

interface RolesAttributes {
  name: "Owner" | "Admin" | "Member";
}

@Table({
  tableName: "roles",
  modelName: "roles",
  underscored: true,
  timestamps: true,
})
export class Roles extends Model<RolesAttributes> {
  // Define the association between the Roles and NpoMembers table

  @HasMany(() => NpoMembers)
  npoMembers!: NpoMembers[];

  // Define the columns of the Roles table
  @Column({
    type: DataType.ENUM("Owner", "Admin", "Member"),
    allowNull: false,
  })
  declare name: "Owner" | "Admin" | "Member";
}
