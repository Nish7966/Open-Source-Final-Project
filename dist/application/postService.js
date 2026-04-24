"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostService = exports.editPostService = exports.likePostService = exports.getPostsService = exports.createPostService = void 0;
const Post_1 = __importDefault(require("../domain/Post"));
const mongoose_1 = __importDefault(require("mongoose"));
const createPostService = async (title, content, userId) => {
    return await Post_1.default.create({ title, content, user: userId });
};
exports.createPostService = createPostService;
const getPostsService = async () => {
    return await Post_1.default.find().populate("user", "name");
};
exports.getPostsService = getPostsService;
const likePostService = async (postId, userId) => {
    const post = await Post_1.default.findById(postId);
    if (!post)
        throw new Error("Post not found");
    const alreadyLiked = post.likes.some((id) => id.toString() === userId);
    if (alreadyLiked) {
        throw new Error("You already liked this post");
    }
    post.likes.push(new mongoose_1.default.Types.ObjectId(userId));
    await post.save();
    return post;
};
exports.likePostService = likePostService;
const editPostService = async (postId, userId, title, content) => {
    const post = await Post_1.default.findById(postId);
    if (!post)
        throw new Error("Post not found");
    if (!post.user || post.user.toString() !== userId) {
        throw new Error("Not authorized to edit this post");
    }
    if (title)
        post.title = title;
    if (content)
        post.content = content;
    await post.save();
    return post;
};
exports.editPostService = editPostService;
const deletePostService = async (postId, userId) => {
    const post = await Post_1.default.findById(postId);
    if (!post)
        throw new Error("Post not found");
    const postUserId = post.user?.toString();
    if (!postUserId || postUserId !== userId) {
        throw new Error("Not authorized to delete this post");
    }
    await post.deleteOne();
    return { message: "Post deleted successfully" };
};
exports.deletePostService = deletePostService;
//# sourceMappingURL=postService.js.map