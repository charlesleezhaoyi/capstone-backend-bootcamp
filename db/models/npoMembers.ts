"use strict";

import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Members } from "../models/members"; // Import the Members class from the appropriate module
import { Roles } from "../models/roles";
import { Npos } from "../models/npos";

interface NpoMembersAttributes {
  npo_id: number;
  member_id: number;
  role_id: number;
  open_ended_ans_1?: string;
  open_ended_ans_2?: string;
  open_ended_ans_3?: string;
}

@Table({
  tableName: "npo_members",
  modelName: "npo_members",
  underscored: true,
  timestamps: true,
})
export class NpoMembers extends Model<NpoMembersAttributes> {
  // Define the association between the Npos and Members classes
  @ForeignKey(() => Npos)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare npo_id: number;

  @ForeignKey(() => Members)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare member_id: number;

  @ForeignKey(() => Roles)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare role_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare open_ended_ans_1?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare open_ended_ans_2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare open_ended_ans_3?: string;

  @BelongsTo(() => Npos)
  npos!: Npos;

  @BelongsTo(() => Members)
  members!: Members;

  @BelongsTo(() => Roles)
  roles!: Roles;
}
