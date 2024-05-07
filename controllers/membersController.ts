import { Request, Response } from "express";
import { Members, NpoMembers } from "../db/models";

interface MembersAttributes {
  id: number;
  full_name: string;
  date_of_birth: Date;
  gender: string;
  occupation: string;
  employee_at?: string | undefined;
  email: string;
  cv_url?: string | undefined;
  portfolio_link_url?: string | undefined;
  is_onboarded: boolean;
  createdAt: string;
  updatedAt: string;
}

export class MembersController {
  async getNpoMembers(req: Request, res: Response) {
    const { npoId } = req.params;
    try {
      const output = await Members.findAll({
        include: [{ model: NpoMembers, where: { npo_id: npoId } }],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
