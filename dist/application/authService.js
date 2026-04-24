"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const User_1 = __importDefault(require("../domain/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "your_secret";
const registerUser = async (name, email, password) => {
    const hashed = await bcrypt_1.default.hash(password, 10);
    return await User_1.default.create({
        name,
        email,
        password: hashed,
        role: "user",
    });
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await User_1.default.findOne({ email });
    if (!user)
        throw new Error("User not found");
    if (!user.password) {
        throw new Error("User password missing");
    }
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match)
        throw new Error("Invalid password");
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    return token;
};
exports.loginUser = loginUser;
//# sourceMappingURL=authService.js.map