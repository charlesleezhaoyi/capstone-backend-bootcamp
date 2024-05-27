import { Request, Response } from "express";
import { Npos } from "../db/models/npos";

interface NposAttributes {
  name: string;
  key_activities: string;
  company_website_url: string;
  url_extension: string;
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

  async createNpo(req: Request, res: Response) {
    const {
      name,
      key_activities,
      company_website_url,
      url_extension,
      country_incorporated,
      company_description,
      company_size,
      company_logo_url,
      acra_url,
      open_ended_qn_1,
      open_ended_qn_2,
      open_ended_qn_3,
      is_whitelabelled,
      event_module,
      discussion_module,
      membership_mgmt,
      is_verified,
    } = req.body;
    try {
      const output = await Npos.create({
        name: name,
        url_extension: url_extension,
        key_activities: key_activities,
        company_website_url: company_website_url,
        country_incorporated: country_incorporated,
        company_description: company_description,
        company_size: company_size,
        company_logo_url: company_logo_url,
        acra_url: acra_url,
        open_ended_qn_1: open_ended_qn_1,
        open_ended_qn_2: open_ended_qn_2,
        open_ended_qn_3: open_ended_qn_3,
        is_whitelabelled: is_whitelabelled,
        event_module: event_module,
        discussion_module: discussion_module,
        membership_mgmt: membership_mgmt,
        is_verified: is_verified,
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
  async updateNpoVerifiedStatus(req: Request, res: Response) {
    const { npo_id } = req.body;
    try {
      const npo = await Npos.findByPk(npo_id);
      if (npo) {
        npo.is_verified = true;
        await npo.save();
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async getNpoIdByNpoName(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const output = await Npos.findOne({
        where: { name: name },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async updateNpoData(req: Request, res: Response) {
    const { npo_id, ...updateData } = req.body;
    try {
      const npo = await Npos.findByPk(npo_id);
      if (!npo) {
        return res.status(404).json({ error: true, msg: "NPO not found" });
      }

      // Update the NPO data with the user input
      let isChanged = false;
      for (const key in updateData) {
        if (
          updateData.hasOwnProperty(key) &&
          (npo as any)[key] !== updateData[key]
        ) {
          (npo as any)[key] = updateData[key];
          isChanged = true;
        }
      }

      if (isChanged) {
        await npo.save();
      }

      return res.json({ success: true, msg: "NPO data updated successfully" });
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }

  async getListNpoNames(req: Request, res: Response) {
    try {
      const output = await Npos.findAll({
        attributes: ["name"],
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: (err as Error).message });
    }
  }
}
