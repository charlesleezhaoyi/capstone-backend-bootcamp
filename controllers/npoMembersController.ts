import { Request, Response } from "express";
import { Members, NpoMembers, Npos, Roles } from "../db/models/index";

interface NpoMembersAttributes {
  id: number;
  npo_id: number;
  member_id: number;
  role_id: number;
  open_ended_ans_1?: string;
  open_ended_ans_2?: string;
  open_ended_ans_3?: string;
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
            include: [{ model: Roles }, { model: Npos }],
          },
        ],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async assignRoleToMember(req: Request, res: Response) {
    const { role_id, member_id } = req.body;
    console.log("Assigning role to a member");
    try {
      const role = await Roles.findOne({
        where: { id: role_id } as any,
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
    const { npo_name, member_id, role_id } = req.body;
    try {
      const npo = await Npos.findOne({
        where: { name: npo_name },
      });
      console.log(npo);

      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }

      const npoMember = await NpoMembers.findOne({
        where: {
          member_id: member_id,
          npo_id: npo.id,
        },
      });

      console.log(npoMember);
      const member = await Members.findByPk(member_id);
      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }
      console.log(member);
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
          role_id: role_id,
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

  async getNpoMembersNpo(req: Request, res: Response) {
    const { member_id, npo_id } = req.body;
    try {
      const output = await NpoMembers.findAll({
        where: { member_id: member_id },
        include: [{ model: Npos }],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async getNpoMembersRole(req: Request, res: Response) {
    const { member_id, npo_id } = req.body;
    try {
      const output = await NpoMembers.findAll({
        where: { member_id: member_id, npo_id: npo_id },
        include: [{ model: Roles }],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  // async getNpoMembersRoleAndNpo(req: Request, res: Response) {
  //   const { member_id } = req.body;
  //   try {
  //     const output = await NpoMembers.findAll({
  //       where: { member_id: member_id },
  //       include: [{ model: Roles }, { model: Npos }],
  //     });
  //     return res.json(output);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: (err as Error).message });
  //   }
  // }

  //Will not work as expected if user has multiple NPOs under same email
  async getNpoNameByMemberID(req: Request, res: Response) {
    const { member_id } = req.body;
    try {
      const member = await Members.findByPk(member_id);
      if (!member) {
        return res.status(404).json({ error: true, msg: "Member not found" });
      }
      const npoMembers = await NpoMembers.findAll({
        where: { member_id: member_id },
        order: [["updatedAt", "DESC"]],
      });
      if (!npoMembers.length) {
        return res
          .status(404)
          .json({ error: true, msg: "NPO Member not found" });
      } else if (npoMembers.length > 1) {
        return res
          .status(400)
          .json({ error: true, msg: "Member has multiple NPOs" });
      } else {
        const npo_name = await Npos.findByPk(npoMembers[0].npo_id);
        return res.json(npo_name?.name);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
