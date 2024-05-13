"use strict";

import { EnumDataType } from "sequelize";
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { NpoMembers } from "./npoMembers";
import { Events } from "./events";

interface MembersAttributes {
  full_name: string;
  date_of_birth: Date;
  gender: EnumDataType<string>;
  occupation: string;
  employee_at: string;
  email: string;
  cv_url: string;
  portfolio_link_url: string;
  display_img_url: string;
  is_onboarded: boolean;
}

@Table({
  tableName: "members",
  modelName: "members",
  underscored: true,
})
export class Members extends Model<MembersAttributes> {
  // Define the association between the Npos and Members table

  @HasMany(() => NpoMembers)
  declare npoMembers: NpoMembers[];

  // Define the association between Members and Events table
  @BelongsToMany(() => Events, {
    through: "event_members",
    foreignKey: "member_id",
    otherKey: "event_id",
    as: "Members",
  })
  declare events: Events[];

  // Define the columns of the Members table
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare full_name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare date_of_birth: Date;

  @Column({
    type: DataType.ENUM("female", "male"),
    allowNull: false,
  })
  declare gender: EnumDataType<string>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare occupation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare employee_at?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare cv_url?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare portfolio_link_url?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare display_img_url?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  declare is_onboarded: boolean;
}
