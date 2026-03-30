import express from "express";
import { createPost, getPosts, likePost } from "../controllers/postController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getPosts); // public

router.post("/", authMiddleware, createPost); // protected
router.post("/:id/like", authMiddleware, likePost); // protected

export default router;