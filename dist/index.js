"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
// Enable CORS access to this server
app.use((0, cors_1.default)());
//JSON middleware
app.use(express_1.default.json());
// Routers
app.listen(PORT, () => {
    console.log(`Express app listening on port ${PORT}!`);
});
//# sourceMappingURL=index.js.map