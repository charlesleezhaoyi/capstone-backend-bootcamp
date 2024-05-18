import { Request, Response } from "express";
import { Events, Members, NpoMembers, Npos, Roles } from "../db/models/index";

export class EventsController {
  async getNpoEvents(req: Request, res: Response) {
    const { npoId } = req.params;
    console.log(req.params);
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

  // async createNpoEvents(req: Request, res: Response) {
  //   const { npoId } = req.params;
  //   const { name, description, date, time, venue, organiserId } = req.body;
  //   try {
  //     const event = await Events.create({
  //       name,
  //       description,
  //       date,
  //       time,
  //       venue,
  //       organiser_id: organiserId,
  //       npo_id: npoId,
  //     });
  //     return res.json(event);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: (err as Error).message });
  //   }
  // }

  // async updateNpoEvents(req: Request, res: Response) {
  //   const { eventId } = req.params;
  //   const { name, description, date, time, venue, organiserId } = req.body;
  //   try {
  //     const event = await Events.findByPk(eventId);
  //     if (!event) {
  //       return res.status(404).json({ error: true, msg: "Event not found" });
  //     }
  //     await event.update({
  //       name,
  //       description,
  //       date,
  //       time,
  //       venue,
  //       organiser_id: organiserId,
  //     });
  //     return res.json(event);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: (err as Error).message });
  //   }
  // }

  // async deleteNpoEvents(req: Request, res: Response) {
  //   const { eventId } = req.params;
  //   try {
  //     const event = await Events.findByPk(eventId);
  //     if (!event) {
  //       return res.status(404).json({ error: true, msg: "Event not found" });
  //     }
  //     await event.destroy();
  //     return res.json({ success: true });
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: (err as Error).message });
  //   }
  // }
}
