"use strict";

import { Model, Table, Column, DataType } from "sequelize-typescript";

interface NposAttributes {
  name: string;
  event_module: boolean;
  discussion_module: boolean;
  membership_mgmt: string;
}

@Table({
  tableName: "npos",
  modelName: "npos",
  underscored: true,
})
export class Npos extends Model<NposAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  event_module!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  discussion_module!: boolean;

  @Column({
    type: DataType.ENUM,
    values: ["free", "basic", "premium"],
    allowNull: false,
  })
  membership_mgmt!: string;
}
