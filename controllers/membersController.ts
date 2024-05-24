import { Request, Response } from "express";
import { Members, NpoMembers, Roles, Npos } from "../db/models/index";

interface MembersAttributes {
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
  npoMembers: NpoMembers[];
}

export class MembersController {
  async createMember(req: Request, res: Response) {
    console.log("createMember", req.body);

    const {
      full_name,
      email,
      date_of_birth,
      gender,
      occupation,
      employee_at,
      cv_url,
      portfolio_link_url,
      is_onboarded,
    } = req.body;
    try {
      const output = await Members.create({
        full_name,
        email,
        date_of_birth: date_of_birth,
        gender: gender,
        occupation: occupation,
        employee_at: employee_at,
        cv_url: cv_url,
        portfolio_link_url: portfolio_link_url,
        is_onboarded: is_onboarded,
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async updateMember(req: Request, res: Response) {
    const { npo_id, member_id } = req.body;
    try {
      const checkMemberExistInNpo = await NpoMembers.findOne({
        where: { npo_id: npo_id, member_id: member_id },
      });
      if (checkMemberExistInNpo) {
        const member = await Members.findByPk(member_id);
        if (member) {
          member.is_onboarded = true;
          await member.save();
        }
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
