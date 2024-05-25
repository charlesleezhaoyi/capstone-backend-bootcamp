import { Request, Response } from "express";
import { Members, Events, EventMembers } from "../db/models/index";

interface EventMembersAttributes {
  event_id: number;
  member_id: number;
  invite_sent: boolean;
  rsvp: boolean;
}

export class EventMembersController {
  async rsvpEvent(req: Request, res: Response) {
    const { event_id, member_id } = req.body;
    try {
      const event = await Events.findByPk(event_id);
      if (!event) {
        return res.status(404).json({ error: true, msg: "Event not found" });
      }
      const member = await Members.findByPk(member_id);
      if (!member) {
        return res.status(404).json({ error: true, msg: "Member not found" });
      }
      await EventMembers.create({
        event_id: event.id,
        member_id: member.id,
        rsvp: true,
        invite_sent: false,
      });
      return res.json({ success: true, msg: "Member RSVPed to event" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async removeRSVPfromEvent(req: Request, res: Response) {
    const { event_id, member_id } = req.body;
    try {
      const event = await Events.findByPk(event_id);
      if (!event) {
        return res.status(404).json({ error: true, msg: "Event not found" });
      }
      const member = await Members.findByPk(member_id);
      if (!member) {
        return res.status(404).json({ error: true, msg: "Member not found" });
      }
      await EventMembers.destroy({
        where: {
          event_id: event.id,
          member_id: member.id,
        },
      });
      return res.json({ success: true, msg: "Member removed from event" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
