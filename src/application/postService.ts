import Post from "../domain/Post";

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

  post.likes.push(userId);
  await post.save();

  return post;
};
