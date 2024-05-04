"use strict";

import { Model, Table, Column, DataType } from "sequelize-typescript";

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
  @Column({
    type: DataType.ENUM,
    values: ["Category1", "Category2", "Category3"],
    allowNull: false,
  })
  name!: "Category1" | "Category2" | "Category3";
}
