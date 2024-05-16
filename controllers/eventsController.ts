import { Request, Response } from "express";
import { Events, Members, NpoMembers, Npos, Roles } from "../db/models/index";

export class EventsController {
  async getNpoEvents(req: Request, res: Response) {
    const { npoId } = req.params;
    const fetchOrganiser = async (event: Events) => {
      const organiser = await Members.findByPk(event.organiser_id);
      return { ...event.dataValues, organiser: organiser?.dataValues };
    };
    try {
      const events = await Events.findAll({
        where: { npo_id: npoId },
      });
      const eventsWithOrganisers = await Promise.all(
        events.map(async (event) => {
          const organiser = await Members.findByPk(event.organiser_id);
          return { ...event.dataValues, organiser: organiser?.dataValues };
        })
      );
      return res.json(eventsWithOrganisers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
