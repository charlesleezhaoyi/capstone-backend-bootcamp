import { Request, Response } from "express";
import { Events, Members, NpoMembers, Npos, Roles } from "../db/models/index";
import { Op } from "sequelize";

interface EventsAttributes {
  organiser_id: number;
  npo_id: number;
  event_overview: string;
  event_name: string;
  event_photo_url?: string;
  date: Date;
  time: string;
  location?: string;
  price?: number;
}

export class EventsController {
  constructor() {
    this.checkOrganiserPermissions = this.checkOrganiserPermissions.bind(this);
    this.createNpoEvent = this.createNpoEvent.bind(this);
    this.deleteNpoEvent = this.deleteNpoEvent.bind(this);
    this.updateNpoEvent = this.updateNpoEvent.bind(this);
  }

  async getNpoEvents(req: Request, res: Response) {
    const { npo_id } = req.params;
    console.log(req.params);
    try {
      const events = await Events.findAll({
        where: { npo_id: npo_id },
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

  async getSingleEventById(req: Request, res: Response) {
    const { event_id } = req.params;
    console.log(req.params);
    try {
      const event = await Events.findByPk(event_id);
      return res.json(event);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async checkOrganiserPermissions(
    req: Request,
    res: Response
  ): Promise<boolean> {
    const { organiser_id, npo_id } = req.body;
    try {
      const organiser = await NpoMembers.findOne({
        where: {
          member_id: organiser_id,
          npo_id: npo_id,
          role_id: { [Op.or]: [1, 2] },
        },
      });
      return !!organiser;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async createNpoEvent(req: Request, res: Response) {
    const {
      npo_id,
      organiser_id,
      event_photo_url,
      event_name,
      event_overview,
      date,
      time,
      location,
      price,
    } = req.body;

    try {
      const npo = await Npos.findByPk(npo_id);
      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }

      const newReq = {
        ...req,
        body: { npo_id, organiser_id },
      };

      console.log(newReq);
      const isOrganiserAllowed = await this.checkOrganiserPermissions(
        newReq as Request,
        res
      );
      console.log(isOrganiserAllowed);

      if (!isOrganiserAllowed) {
        return res.status(404).json({
          error: true,
          msg: "User is not allowed to create event or not found in NPO",
        });
      }

      const newEvent = await Events.create({
        organiser_id: organiser_id,
        npo_id: parseInt(npo_id),
        event_name: event_name,
        event_photo_url: event_photo_url,
        event_overview: event_overview,
        date: date,
        time: time,
        location: location,
        price: price,
      });

      console.log(newEvent);
      return res.json(newEvent);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async updateNpoEvent(req: Request, res: Response) {
    const {
      npo_id,
      event_id,
      organiser_id,
      event_photo_url,
      event_name,
      event_overview,
      date,
      time,
      location,
      price,
    } = req.body;
    try {
      const npo = await Events.findAll({
        where: { npo_id: npo_id },
      });
      const event = await Events.findByPk(event_id);

      const newReq = {
        ...req,
        body: { npo_id, organiser_id },
      };
      const isOrganiserAllowed = await this.checkOrganiserPermissions(
        newReq as Request,
        res
      );

      if (!isOrganiserAllowed) {
        return res.status(404).json({
          error: true,
          msg: "User is not allowed to update event or not found in NPO",
        });
      }
      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }
      if (!event) {
        return res.status(404).json({ error: true, msg: "Event not found" });
      }
      event.organiser_id = organiser_id;
      event.event_photo_url = event_photo_url;
      event.event_name = event_name;
      event.event_overview = event_overview;
      event.date = date;
      event.time = time;
      event.location = location;
      event.price = price;
      await event.save();
      return res.json(event);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async deleteNpoEvent(req: Request, res: Response) {
    const { npo_id } = req.params;
    const { event_id, organiser_id } = req.body;
    try {
      const npo = await Events.findAll({
        where: { npo_id: npo_id },
      });
      const event = await Events.findByPk(event_id);
      if (!event) {
        return res.status(404).json({ error: true, msg: "Event not found" });
      }
      const newReq = {
        ...req,
        body: { npo_id, organiser_id },
      };
      const isOrganiserAllowed = await this.checkOrganiserPermissions(
        newReq as Request,
        res
      );

      if (!isOrganiserAllowed) {
        return res.status(404).json({
          error: true,
          msg: "User is not allowed to delete event or not found in NPO",
        });
      }
      if (!npo)
        return res.status(404).json({ error: true, msg: "NPO not found" });
      if (!event)
        return res.status(404).json({ error: true, msg: "Event not found" });

      await event.destroy();
      return res.json({ success: true, msg: "Event deleted" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
