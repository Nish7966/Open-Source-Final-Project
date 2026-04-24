"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authService_1 = require("../../application/authService");
const register = async (req, res) => {
    try {
        const user = await (0, authService_1.registerUser)(req.body.name, req.body.email, req.body.password);
        res.json(user);
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const token = await (0, authService_1.loginUser)(req.body.email, req.body.password);
        res.json({ token });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map