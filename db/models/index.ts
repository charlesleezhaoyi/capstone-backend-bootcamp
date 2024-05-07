import { Sequelize } from "sequelize-typescript";
import { Npos } from "./npos";
import { Members } from "./members";
import { NpoMembers } from "./npoMembers";
import { Roles } from "./roles";
import { Events } from "./events";
import { Categories } from "./categories";
import { Dialect } from "sequelize";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = require(path.join(
  __dirname,
  "..",
  "..",
  "config",
  "database.js"
))[env];

let sequelize: Sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT as Dialect,
    models: [Npos, Members, NpoMembers, Roles, Events, Categories],
  });
} else if (config.use_env_variable) {
  // If your configuration specifies a variable (e.g., DATABASE_URL), use it
  const dbUrl = process.env[config.use_env_variable]!;
  sequelize = new Sequelize(dbUrl, config);
} else {
  // Use the configuration file details
  sequelize = new Sequelize({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT as Dialect,
    models: [Npos, Members, NpoMembers, Roles, Events, Categories],
  });
}

// Confirms the connection to the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
})();

// Export model instance
export { sequelize, Npos, Members, NpoMembers, Roles, Events, Categories };
