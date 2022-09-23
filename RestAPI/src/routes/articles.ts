import { Router } from "express";
import { getArticle } from "../controllers/articles";
const router = Router();

router.get("/get", getArticle);

export default router;
