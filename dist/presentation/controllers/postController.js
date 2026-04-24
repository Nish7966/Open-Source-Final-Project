"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.likePost = exports.getPosts = exports.createPost = void 0;
const postService_1 = require("../../application/postService");
const createPost = async (req, res) => {
    try {
        const post = await (0, postService_1.createPostService)(req.body.title, req.body.content, req.user.id);
        res.json(post);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.createPost = createPost;
const getPosts = async (req, res) => {
    try {
        const posts = await (0, postService_1.getPostsService)();
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getPosts = getPosts;
const likePost = async (req, res) => {
    try {
        const post = await (0, postService_1.likePostService)(req.params.id, req.user.id);
        res.json(post);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.likePost = likePost;
const editPost = async (req, res) => {
    try {
        const post = await (0, postService_1.editPostService)(req.params.id, req.user.id, req.body.title, req.body.content);
        res.json(post);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.editPost = editPost;
const deletePost = async (req, res) => {
    try {
        const result = await (0, postService_1.deletePostService)(req.params.id, req.user.id);
        res.json(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map