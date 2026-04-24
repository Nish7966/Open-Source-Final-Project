"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController_1 = require("../controllers/commentController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post("/:postId", authMiddleware_1.authMiddleware, commentController_1.addComment);
router.get("/:postId", commentController_1.getComments);
exports.default = router;
//# sourceMappingURL=commentRoutes.js.map