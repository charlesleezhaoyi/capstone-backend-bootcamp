import { MembersController } from "../controllers/membersController";
import { Router } from "express";

const membersController = new MembersController();

export class MembersRouter {
  routes = () => {
    const router = Router();
    router.get("/members/:npoId", membersController.getNpoMembers);

    return router;
  };
}
