"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npos = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const npos_1 = require("./npos");
Object.defineProperty(exports, "Npos", { enumerable: true, get: function () { return npos_1.Npos; } });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const env = process.env.NODE_ENV || "development";
const config = require(path_1.default.join(__dirname, "..", "..", "config", "database.js"))[env];
let sequelize;
if (process.env.DATABASE_URL) {
    exports.sequelize = sequelize = new sequelize_typescript_1.Sequelize({
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        models: [npos_1.Npos],
    });
}
else if (config.use_env_variable) {
    // If your configuration specifies a variable (e.g., DATABASE_URL), use it
    const dbUrl = process.env[config.use_env_variable];
    exports.sequelize = sequelize = new sequelize_typescript_1.Sequelize(dbUrl, config);
}
else {
    // Use the configuration file details
    exports.sequelize = sequelize = new sequelize_typescript_1.Sequelize({
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.NAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        models: [npos_1.Npos],
    });
}
// Confirms the connection to the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to the database!");
    }
    catch (err) {
        console.error("Error connecting to the database:", err);
    }
})();
//# sourceMappingURL=index.js.map