import express from "express";
import { getStats } from "../controllers/adminController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// GET /api/admin/stats
router.get("/stats", authMiddleware, getStats);

export default router;