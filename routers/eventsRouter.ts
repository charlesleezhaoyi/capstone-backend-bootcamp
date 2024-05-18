import { EventsController } from "../controllers/eventsController";
import { Router } from "express";

const eventsController = new EventsController();

export class EventsRouter {
  private eventsController: EventsController;

  constructor(eventsController: EventsController) {
    this.eventsController = eventsController;
  }

  routes = () => {
    const router = Router();
    router.get("/:npoId/events", eventsController.getNpoEvents);

    return router;
  };
}
