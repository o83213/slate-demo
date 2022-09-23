"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/save", (req, res, next) => {
    const content = req.body.content;
    return res;
});
exports.default = router;
