"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const postRoutes_1 = __importDefault(require("./presentation/routes/postRoutes"));
const authRoutes_1 = __importDefault(require("./presentation/routes/authRoutes"));
const commentRoutes_1 = __importDefault(require("./presentation/routes/commentRoutes"));
const adminRoutes_1 = __importDefault(require("./presentation/routes/adminRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use("/api/posts", postRoutes_1.default);
app.use("/api/auth", authRoutes_1.default);
app.use("/api/comments", commentRoutes_1.default);
app.use("/api/admin", adminRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Forum Backend Running");
});
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};
startServer();
//# sourceMappingURL=server.js.map