import { Request, Response } from "express";
import { Members, NpoMembers, Npos, Roles } from "../db/models/index";
import { EnumDataType } from "sequelize";

interface NpoMember {
  id: number;
  npo_id: number;
  member_id: number;
  role_id: number;
  role?: string;
  open_ended_ans_1?: string | undefined;
  open_ended_ans_2?: string | undefined;
  open_ended_ans_3?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface MembersAttributes {
  id: number;
  full_name: string;
  date_of_birth: string;
  gender: EnumDataType<string>;
  occupation: string;
  employee_at?: string | undefined;
  email: string;
  cv_url?: string | undefined;
  portfolio_link_url?: string | undefined;
  is_onboarded: boolean;
  createdAt: string;
  updatedAt: string;
  npoMembers: NpoMember[];
}

export class MembersController {
  async createMemberWithDefaultValues(req: Request, res: Response) {
    console.log("createMember", req.body);

    const { email } = req.body;
    try {
      const output = await Members.create({
        full_name: "NULL",
        email: email,
        date_of_birth: new Date(),
        gender: "female" as any,
        occupation: "NULL",
        employee_at: "NULL",
        cv_url: "NULL",
        portfolio_link_url: "NULL",
        is_onboarded: false,
        display_img_url: "NULL",
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async updateMemberWithCompleteValues(req: Request, res: Response) {
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
    console.log(req.body);
    try {
      const member = await Members.findOne({
        where: { email: email },
      });
      if (member) {
        // Update member's data progressively
        console.log("member found", member);
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
        if (full_name) member.full_name = full_name;
        if (email) member.email = email;
        if (date_of_birth) member.date_of_birth = date_of_birth;
        if (gender) member.gender = gender;
        if (occupation) member.occupation = occupation;
        if (employee_at) member.employee_at = employee_at;
        if (cv_url) member.cv_url = cv_url;
        if (portfolio_link_url) member.portfolio_link_url = portfolio_link_url;
        if (is_onboarded) member.is_onboarded = is_onboarded;
        console.log("member updated", member);
        await member.save();
        return res.status(200).json({ success: true, data: member });
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async getMemberIDByEmail(req: Request, res: Response) {
    console.log("getMemberIDByEmail called"); // Log when the method is called
    const { email } = req.body;
    console.log("Email:", email); // Log the email from the request body
    try {
      const member = await Members.findOne({
        where: { email: email },
      });
      console.log("Member:", member); // Log the member found in the database
      if (member) {
        console.log("member found", member.id);
        return res.status(200).json({ success: true, data: member.id });
      } else {
        console.log("No member found"); // Log when no member is found
      }
    } catch (err) {
      console.log("Error:", err); // Log any errors
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
