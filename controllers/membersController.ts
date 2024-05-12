import { Request, Response } from "express";
import { Members, NpoMembers, Roles } from "../db/models";

interface NpoMember {
  id: number;
  npo_id: number;
  member_id: number;
  role_id: number;
  role?: string;
  open_ended_ans_1: string | null;
  open_ended_ans_2: string | null;
  open_ended_ans_3: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Member {
  id: number;
  full_name: string;
  date_of_birth: string;
  gender: "male" | "female";
  occupation: string;
  employee_at: string;
  email: string;
  cv_url: string;
  portfolio_link_url: string;
  is_onboarded: boolean;
  createdAt: string;
  updatedAt: string;
  npoMembers: NpoMember[];
}

export class MembersController {
  async getNpoMembers(req: Request, res: Response) {
    const { npoId } = req.params;
    try {
      const output = await Members.findAll({
        include: [
          {
            model: NpoMembers,
            where: { npo_id: npoId },
            include: [{ model: Roles }],
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
