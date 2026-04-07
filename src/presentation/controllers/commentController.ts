import { Request, Response } from "express";
import {
  addCommentService,
  getCommentsService,
} from "../../application/commentService";


export const addComment = async (req: any, res: Response) => {
  try {
    const comment = await addCommentService(
      req.body.content,
      req.user.id,
      req.params.postId as string
    );
    res.json(comment);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};


export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await getCommentsService(req.params.postId as string);
    res.json(comments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};