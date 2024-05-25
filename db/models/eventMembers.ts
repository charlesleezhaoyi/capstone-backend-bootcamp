"use strict";

import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Members } from "./members"; // Import the Members class from the appropriate module
import { Events } from "./events";

interface EventMembersAttributes {
  event_id: number;
  member_id: number;
  invite_sent: boolean;
  rsvp: boolean;
}

@Table({
  tableName: "event_members",
  modelName: "event_members",
  underscored: true,
  timestamps: true,
})
export class EventMembers extends Model<EventMembersAttributes> {
  // Define the association between the Events and Members classes
  @ForeignKey(() => Members)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare member_id: number;

  @ForeignKey(() => Events)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare event_id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare invite_sent?: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare rsvp?: boolean;

  @BelongsTo(() => Events)
  events!: Events;

  @BelongsTo(() => Members)
  members!: Members;
}
