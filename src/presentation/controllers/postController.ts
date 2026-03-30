

import { Request, Response } from "express";
import { createPostService, getPostsService, likePostService } from "../../application/postService";

export const createPost = async (req: any, res: Response) => {
  const post = await createPostService(req.body.title, req.body.content, req.user.id);
  res.json(post);
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await getPostsService();
  res.json(posts);
};

export const likePost = async (req: any, res: Response) => {
  const post = await likePostService(req.params.id, req.user.id);
  res.json(post);
};