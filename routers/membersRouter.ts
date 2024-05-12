import { MembersController } from "../controllers/membersController";
import { Router } from "express";

export class MembersRouter {
  private membersController: MembersController;

  constructor(membersController: MembersController) {
    this.membersController = membersController;
  }

  routes = () => {
    const router = Router();
    router.post("/", this.membersController.createMember);
    router.put("/:memberId", this.membersController.updateMember);

    return router;
  };
}
