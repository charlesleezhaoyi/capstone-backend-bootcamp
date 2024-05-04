"use strict";

import { EnumDataType } from "sequelize";
import { Model, Table, Column, DataType } from "sequelize-typescript";
import { BelongsTo, ForeignKey } from "sequelize-typescript";
import { Npos } from "./npos";

interface MembersAttributes {
  full_name: string;
  date_of_birth: Date;
  gender: EnumDataType<string>;
  occupation: string;
  employee_at: string;
  email: string;
  cv_url: string;
  portfolio_link_url: string;
  is_onboarded: boolean;
}

@Table({
  tableName: "members",
  modelName: "members",
  underscored: true,
})
export class Members extends Model<MembersAttributes> {
  // Define the association between the Npos and Members classes
  @ForeignKey(() => Npos)
  @Column
  npo_id!: number;

  @BelongsTo(() => Npos)
  npo!: Npos;

  // Define the columns of the Members table
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date_of_birth!: Date;

  @Column({
    type: DataType.ENUM("female", "male"),
    allowNull: false,
  })
  gender!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  occupation!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  employee_at?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  cv_url?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  portfolio_link_url?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_onboarded!: boolean;
}
