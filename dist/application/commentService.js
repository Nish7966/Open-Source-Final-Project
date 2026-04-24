"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsService = exports.addCommentService = void 0;
const Comment_1 = __importDefault(require("../domain/Comment"));
const addCommentService = async (content, userId, postId) => {
    return await Comment_1.default.create({
        content,
        user: userId,
        post: postId,
    });
};
exports.addCommentService = addCommentService;
const getCommentsService = async (postId) => {
    return await Comment_1.default.find({ post: postId }).populate("user", "name");
};
exports.getCommentsService = getCommentsService;
//# sourceMappingURL=commentService.js.map