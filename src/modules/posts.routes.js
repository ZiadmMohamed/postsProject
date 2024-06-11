import { Router } from "express";
import {
  addPost,
  deletePosts,
  getPost,
  getPosts,
  updatePost,
} from "./posts.controller.js";

const router = Router();

router.post("/", addPost);
router.get("/:id", getPost);
router.get("/", getPosts);
router.put("/", updatePost);
router.delete("/:id", deletePosts);

export default router;
