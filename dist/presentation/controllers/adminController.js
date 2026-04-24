"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const adminService_1 = require("../../application/adminService");
const getStats = async (req, res) => {
    try {
        // ❗ Only admin allowed
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }
        const stats = await (0, adminService_1.getStatsService)();
        res.json(stats);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getStats = getStats;
//# sourceMappingURL=adminController.js.map