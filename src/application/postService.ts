import { PostModel } from "../infrastructure/database/models/Post";

export const createPostService = async (title: string, content: string, userId: string) => {
  const post = new PostModel({ title, content, userId });
  return await post.save();
};

export const getPostsService = async () => {
  return await PostModel.find().sort({ createdAt: -1 });
};

export const likePostService = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);

  if (!post) throw new Error("Post not found");

  // simple like logic (you can improve later)
  return post;
};