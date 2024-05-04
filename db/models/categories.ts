"use strict";

import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Events } from "./events";

interface CategoriesAttributes {
  name: "Category1" | "Category2" | "Category3";
}

@Table({
  tableName: "categories",
  modelName: "categories",
  underscored: true,
  timestamps: true,
})
export class Categories extends Model<CategoriesAttributes> {
  // Define the association between the Events and Categories table

  @BelongsToMany(() => Events, {
    through: "event_categories",
    foreignKey: "category_id",
    otherKey: "event_id",
    as: "Events",
  })
  events!: Events[];

  // Define the columns of the Categories table
  @Column({
    type: DataType.ENUM,
    values: ["Category1", "Category2", "Category3"],
    allowNull: false,
  })
  name!: "Category1" | "Category2" | "Category3";
}
