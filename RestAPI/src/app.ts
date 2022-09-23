import express from "express";
import bodyParser from "body-parser";

import ArticleRoute from "./routes/articles";
const app = express();

app.use(bodyParser.json());

app.use("/article", ArticleRoute);

app.listen(8080);
