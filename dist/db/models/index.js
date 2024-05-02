var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Sequelize } from "sequelize-typescript";
import { Npos } from "./npos";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "..", "..", "config", "database.js"))[env];
let sequelize;
if (process.env.DATABASE_URL) {
    sequelize = new Sequelize({
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        models: [Npos],
    });
}
else if (config.use_env_variable) {
    // If your configuration specifies a variable (e.g., DATABASE_URL), use it
    const dbUrl = process.env[config.use_env_variable];
    sequelize = new Sequelize(dbUrl, config);
}
else {
    // Use the configuration file details
    sequelize = new Sequelize({
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.NAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        models: [Npos],
    });
}
// Confirms the connection to the database
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connected to the database!");
    }
    catch (err) {
        console.error("Error connecting to the database:", err);
    }
}))();
// Export model instance
export { sequelize, Npos };
//# sourceMappingURL=index.js.map