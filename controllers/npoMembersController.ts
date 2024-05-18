import { Request, Response } from "express";
import { Members, NpoMembers, Npos, Roles } from "../db/models/index";

interface NpoMembersAttributes {
  id: number;
  npo_id: number;
  member_id: number;
  role_id: number;
  open_ended_ans_1?: string | undefined;
  open_ended_ans_2?: string | undefined;
  open_ended_ans_3?: string | undefined;
  created_at: string;
  updated_at: string;
}

export class NpoMembersController {
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

  async assignRoleToMember(req: Request, res: Response) {
    const { role_name, member_id } = req.body;
    try {
      const role = await Roles.findOne({
        where: { name: role_name },
      });
      console.log(role);
      if (!role) {
        return res.status(404).json({ error: true, msg: "Role not found" });
      }
      const member = await NpoMembers.findByPk(member_id);
      if (!member) {
        return res.status(404).json({ error: true, msg: "Member not found" });
      }
      member.role_id = role.id;
      await member.save();
      return res.json(member);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async assignNpoToMember(req: Request, res: Response) {
    const { npo_name, member_id } = req.body;
    try {
      const npo = await Npos.findOne({
        where: { name: npo_name },
      });
      const npoMember = await NpoMembers.findOne({
        where: { member_id: member_id },
      });
      const member = await Members.findByPk(member_id);
      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }
      if (!member) {
        return res.status(404).json({ error: true, msg: "Member not found" });
      }
      if (npoMember) {
        return res
          .status(400)
          .json({ error: true, msg: "Member already assigned to NPO" });
      } else {
        await NpoMembers.create({
          member_id: member_id,
          npo_id: npo.id,
          role_id: 3,
          open_ended_ans_1: "NULL",
          open_ended_ans_2: "NULL",
          open_ended_ans_3: "NULL",
        });
        return res.json(npoMember);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async getNpoMembersRoleAndNpo(req: Request, res: Response) {
    const { member_id } = req.body;
    try {
      const output = await NpoMembers.findAll({
        where: { member_id: member_id },
        include: [{ model: Roles }, { model: Npos }],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
