import express from "express";
import postsRouter from "./src/modules/posts.routes.js";
import cors from "cors";
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use("/posts", postsRouter);

app.use("/", (req, res) => {
  return res.json("welcome to ziad server");
});

app.use("*", (req, res) => {
  return res.json("404 not found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
