import User from "../domain/User";
import Post from "../domain/Post";
import Comment from "../domain/Comment";

export const getStatsService = async () => {
  const totalUsers = await User.countDocuments();
  const totalPosts = await Post.countDocuments();
  const totalComments = await Comment.countDocuments();

  const posts = await Post.find();

  const totalLikes = posts.reduce(
    (sum, post) => sum + post.likes.length,
    0
  );

  return {
    totalUsers,
    totalPosts,
    totalComments,
    totalLikes,
  };
};