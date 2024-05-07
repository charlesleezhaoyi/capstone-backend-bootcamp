"use strict";

import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Categories } from "./categories";
import { Members } from "./members";

interface EventsAttributes {
  organiser_id: number;
  event_overview: string;
  event_name: string;
  event_photo_url?: string;
  date: Date;
  time: string;
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
  categories!: Categories[];

  // Define the association between the Events and Members table
  @BelongsToMany(() => Members, {
    through: "event_members",
    foreignKey: "event_id",
    otherKey: "member_id",
    as: "Members",
  })
  members!: Members[];

  // Define the columns of the Events table
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organiser_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  event_overview!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  event_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  event_photo_url?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  time!: string;
}
