import Post from "../domain/Post";
import mongoose from "mongoose";

export const createPostService = async (
  title: string,
  content: string,
  userId: string,
) => {
  return await Post.create({ title, content, user: userId });
};

export const getPostsService = async () => {
  return await Post.find().populate("user", "name");
};

export const likePostService = async (postId: string, userId: string) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");


  const alreadyLiked = post.likes.some(
    (id) => id.toString() === userId
  );

  if (alreadyLiked) {
    throw new Error("You already liked this post");
  }

  
  post.likes.push(new mongoose.Types.ObjectId(userId));
  await post.save();

  return post;
};
export const editPostService = async (
  postId: string,
  userId: string,
  title: string,
  content: string
) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");


  if (!post.user || post.user.toString() !== userId) {
  throw new Error("Not authorized to edit this post");
}

 
  if (title) post.title = title;
  if (content) post.content = content;

  await post.save();

  return post;
};

export const deletePostService = async (
  postId: string,
  userId: string
) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  const postUserId = post.user?.toString();
  if (!postUserId || postUserId !== userId) {
    throw new Error("Not authorized to delete this post");
  }

  await post.deleteOne();

  return { message: "Post deleted successfully" };
};