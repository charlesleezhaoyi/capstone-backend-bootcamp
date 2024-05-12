import { NposController } from "../controllers/nposController";
import { Router } from "express";

const nposController = new NposController();

export class NposRouter {
  private nposController: NposController;

  constructor(nposController: NposController) {
    this.nposController = nposController;
  }

  routes = () => {
    const router = Router();
    router.get("/checkNpoExist", nposController.checkNpoExist);

    return router;
  };
}
