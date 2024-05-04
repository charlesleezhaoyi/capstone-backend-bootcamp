"use strict";

import { Model, Table, Column, DataType } from "sequelize-typescript";

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
