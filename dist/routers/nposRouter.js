"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NposRouter = void 0;
const nposController_1 = require("../controllers/nposController");
const express_1 = require("express");
const nposController = new nposController_1.NposController();
class NposRouter {
    routes = () => {
        const router = (0, express_1.Router)();
        return router;
    };
}
exports.NposRouter = NposRouter;
//# sourceMappingURL=nposRouter.js.map