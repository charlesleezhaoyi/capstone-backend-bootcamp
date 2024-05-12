import { Request, Response } from "express";
import { Npos } from "../db/models/npos";

interface NposAttributes {
  name: string;
  key_activities: string;
  company_website_url: string;
  country_incorporated: string;
  company_description: string;
  company_size: "1-10" | "11-30" | "31-50";
  company_logo_url: string;
  acra_url: string;
  open_ended_qn_1?: string;
  open_ended_qn_2?: string;
  open_ended_qn_3?: string;
  is_whitelabelled: boolean;
  event_module: boolean;
  discussion_module: boolean;
  membership_mgmt: "premium" | "rulebased";
  is_verified: boolean;
}

export class NposController {
  async checkNpoExist(req: Request, res: Response) {
    let { name } = req.body;
    try {
      name = name.toLowerCase();
      name = name
        .trim()
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      const output = await Npos.findOne({
        where: { name: name },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
