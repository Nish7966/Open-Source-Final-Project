import express from "express";
import {
  createPost,
  getPosts,
  likePost,
  editPost, 
} from "../controllers/postController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getPosts);

router.post("/", authMiddleware, createPost);
router.post("/:id/like", authMiddleware, likePost);
router.put("/:id", authMiddleware, editPost); // ✅ NEW EDIT ROUTE

export default router;