"use strict";

import { Model, Table, Column, DataType } from "sequelize-typescript";
import { HasMany } from "sequelize-typescript";
import { NpoMembers } from "./npoMembers";

interface NposAttributes {
  name: string;
  key_activities: string;
  company_website_url: string;
  country_incorporated: string;
  company_description: string;
  company_size: "1-10" | "11-30" | "31-50";
  company_logo_url: string;
  acra_url: string;
  open_ended_qn_1?: string;
  open_ended_qn_2?: string;
  open_ended_qn_3?: string;
  is_whitelabelled: boolean;
  event_module: boolean;
  discussion_module: boolean;
  membership_mgmt: "premium" | "rulebased";
  is_verified: boolean;
}

@Table({
  tableName: "npos",
  modelName: "npos",
  underscored: true,
  timestamps: true,
})
export class Npos extends Model<NposAttributes> {
  // Define the association between the Npos and Members classes
  @HasMany(() => NpoMembers)
  npoMembers!: NpoMembers[];

  // Define the columns of the Npos table
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.ENUM,
    values: [
      "Education",
      "Healthcare",
      "Environment",
      "Social Services",
      "Others",
    ],
    allowNull: false,
  })
  key_activities!:
    | "Education"
    | "Healthcare"
    | "Environment"
    | "Social Services"
    | "Others";

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company_website_url!: string;

  @Column({
    type: DataType.ENUM,
    values: ["Singapore", "Malaysia"],
    allowNull: false,
  })
  country_incorporated!: "Singapore" | "Malaysia";

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company_description!: string;

  @Column({
    type: DataType.ENUM,
    values: ["1-10", "11-30", "31-50"],
    allowNull: false,
  })
  company_size!: "1-10" | "11-30" | "31-50";

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company_logo_url!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  acra_url!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  open_ended_qn_1?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  open_ended_qn_2?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  open_ended_qn_3?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_whitelabelled!: boolean;

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
    values: ["premium", "rulebased"],
    allowNull: false,
  })
  membership_mgmt!: "premium" | "rulebased";

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_verified!: boolean;
}
