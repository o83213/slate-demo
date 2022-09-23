"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articles_1 = require("../controllers/articles");
const router = (0, express_1.Router)();
router.get("/get", articles_1.getArticle);
exports.default = router;
