import { EventMembersController } from "../controllers/eventMembersController";
import { Router } from "express";

const eventMembersController = new EventMembersController();

export class EventMembersRouter {
  private eventMembersController: EventMembersController;

  constructor(eventMembersController: EventMembersController) {
    this.eventMembersController = eventMembersController;
  }

  routes = () => {
    const router = Router();
    router.post("/rsvpEvent", eventMembersController.rsvpEvent);
    router.post("/removeRsvpEvent", eventMembersController.removeRSVPfromEvent);

    return router;
  };
}
