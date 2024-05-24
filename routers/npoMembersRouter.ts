import { NpoMembersController } from "../controllers/npoMembersController";
import { Router } from "express";

const nposController = new NpoMembersController();

export class NpoMembersRouter {
  private npoMembersController: NpoMembersController;

  constructor(npoMembersController: NpoMembersController) {
    this.npoMembersController = npoMembersController;
  }

  routes = () => {
    const router = Router();
    router.get("/:npoId", nposController.getNpoMembers);
    router.post("/", nposController.getNpoMembersRoleAndNpo);
    router.post(
      "/getNpoNameByMemberEmail",
      nposController.getNpoNameByMemberEmail
    );
    router.post("/assignRole", nposController.assignRoleToMember);
    router.post("/assignNpo", nposController.assignNpoToMember);

    return router;
  };
}
