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
    router.get("/:npo_id/events", eventsController.getNpoEvents);
    router.get("/:event_id/attendees", eventsController.getNpoEventAttendees);
    router.get("/:event_id", eventsController.getSingleEventById);
    router.post("/:npo_id", eventsController.createNpoEvent);
    router.put("/:npo_id", eventsController.updateNpoEvent);
    router.delete("/:npo_id", eventsController.deleteNpoEvent);

    return router;
  };
}
