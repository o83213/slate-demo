"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveArticle = exports.getArticle = void 0;
const Articles = [];
const getArticle = (req, res, next) => {
    res.status(201).json({ message: "get article data", articles: Articles });
};
exports.getArticle = getArticle;
const saveArticle = (req, res, next) => {
    const article = req.body;
    res.status(201).json({ message: "get article data" });
};
exports.saveArticle = saveArticle;
