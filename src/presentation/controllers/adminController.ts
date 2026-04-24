import { Response } from "express";
import { getStatsService } from "../../application/adminService";

export const getStats = async (req: any, res: Response) => {
  try {
    // ❗ Only admin allowed
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const stats = await getStatsService();
    res.json(stats);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};