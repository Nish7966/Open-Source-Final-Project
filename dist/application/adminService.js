"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsService = void 0;
const User_1 = __importDefault(require("../domain/User"));
const Post_1 = __importDefault(require("../domain/Post"));
const Comment_1 = __importDefault(require("../domain/Comment"));
const getStatsService = async () => {
    const totalUsers = await User_1.default.countDocuments();
    const totalPosts = await Post_1.default.countDocuments();
    const totalComments = await Comment_1.default.countDocuments();
    const posts = await Post_1.default.find();
    const totalLikes = posts.reduce((sum, post) => sum + post.likes.length, 0);
    return {
        totalUsers,
        totalPosts,
        totalComments,
        totalLikes,
    };
};
exports.getStatsService = getStatsService;
//# sourceMappingURL=adminService.js.map