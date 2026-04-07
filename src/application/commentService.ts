import Comment from "../domain/Comment";


export const addCommentService = async (
  content: string,
  userId: string,
  postId: string
) => {
  return await Comment.create({
    content,
    user: userId,
    post: postId,
  });
};


export const getCommentsService = async (postId: string) => {
  return await Comment.find({ post: postId }).populate("user", "name");
};