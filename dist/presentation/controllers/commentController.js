"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComments = exports.addComment = void 0;
const commentService_1 = require("../../application/commentService");
const addComment = async (req, res) => {
    try {
        const comment = await (0, commentService_1.addCommentService)(req.body.content, req.user.id, req.params.postId);
        res.json(comment);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.addComment = addComment;
const getComments = async (req, res) => {
    try {
        const comments = await (0, commentService_1.getCommentsService)(req.params.postId);
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getComments = getComments;
//# sourceMappingURL=commentController.js.map