import { NposController } from "../controllers/nposController";
import { Router } from "express";

const nposController = new NposController();

export class NposRouter {
  routes = () => {
    const router = Router();

    return router;
  };
}
