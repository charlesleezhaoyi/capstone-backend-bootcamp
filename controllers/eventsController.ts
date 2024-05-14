import { Request, Response } from "express";
import { Events, Members, NpoMembers, Npos, Roles } from "../db/models/index";

export class EventsController {
  async getNpoEvents(req: Request, res: Response) {
    const { npoId } = req.params;
    try {
      const output = await Events.findAll({});
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
