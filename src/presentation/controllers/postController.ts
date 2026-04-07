import { Request, Response } from "express";
import {
  createPostService,
  getPostsService,
  likePostService,
  editPostService,
  deletePostService,
} from "../../application/postService";


export const createPost = async (req: any, res: Response) => {
  try {
    const post = await createPostService(
      req.body.title,
      req.body.content,
      req.user.id,
    );
    res.json(post);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};


export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsService();
    res.json(posts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const likePost = async (req: any, res: Response) => {
  try {
    const post = await likePostService(req.params.id, req.user.id);
    res.json(post);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const editPost = async (req: any, res: Response) => {
  try {
    const post = await editPostService(
      req.params.id,
      req.user.id,
      req.body.title,
      req.body.content
    );
    res.json(post);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deletePost = async (req: any, res: Response) => {
  try {
    const result = await deletePostService(
      req.params.id,
      req.user.id
    );
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};