"use strict";

import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Categories } from "./categories";
import { Members } from "./members";
import { Npos } from "./npos";

interface EventsAttributes {
  organiser_id: number;
  npo_id: number;
  event_overview: string;
  event_name: string;
  event_photo_url?: string;
  date: Date;
  time: string;
  location?: string;
  price?: number;
}

@Table({
  tableName: "events",
  modelName: "events",
  underscored: true,
})
export class Events extends Model<EventsAttributes> {
  // Define the association between the Events and Categories table
  @BelongsToMany(() => Events, {
    through: "event_categories",
    foreignKey: "event_id",
    otherKey: "category_id",
    as: "Events",
  })
  declare categories: Categories[];

  // Define the association between the Events and Members table
  @BelongsToMany(() => Members, {
    through: "event_members",
    foreignKey: "event_id",
    otherKey: "member_id",
    as: "EventMembers",
  })
  declare members: Members[];

  // Define the columns of the Events table
  @ForeignKey(() => Members)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare organiser_id: number;

  @ForeignKey(() => Npos)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare npo_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare event_overview: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare event_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare event_photo_url?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare date: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  declare time: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare location?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare price?: number;

  @BelongsTo(() => Npos)
  npos!: Npos;
}
