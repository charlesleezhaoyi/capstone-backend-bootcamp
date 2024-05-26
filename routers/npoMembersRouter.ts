import { NpoMembersController } from "../controllers/npoMembersController";
import { Router } from "express";

const npoMembersController = new NpoMembersController();

export class NpoMembersRouter {
  private npoMembersController: NpoMembersController;

  constructor(npoMembersController: NpoMembersController) {
    this.npoMembersController = npoMembersController;
  }

  routes = () => {
    const router = Router();
    router.get("/:npo_url_extension", npoMembersController.getNpoMembersByUrl);
    router.post("/", npoMembersController.getNpoMembersNpo);
    router.post("/getNpoMembersRole", npoMembersController.getNpoMembersRole);
    router.post(
      "/getNpoNameByMemberID",
      npoMembersController.getNpoNameByMemberID
    );
    router.post("/assignRole", npoMembersController.assignRoleToMember);
    router.post("/assignNpo", npoMembersController.assignNpoToMember);

    return router;
  };
}
