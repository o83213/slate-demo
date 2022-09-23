import { RequestHandler } from "express";
import { Article } from "../models/article";
const Articles: Article[] = [];

export const getArticle: RequestHandler = (req, res, next) => {
  res.status(201).json({ message: "get article data", articles: Articles });
};

export const saveArticle: RequestHandler = (req, res, next) => {
  const article = req.body;
  res.status(201).json({ message: "get article data" });
};
