import express from "express";
const router = express.Router();
import {
  deletePost,
  createPost,
  updatePost,
  getAllPosts,
  getPost,
} from "../controllers/postControllers";
import { authenticateToken } from "../middleware/authMiddleware";

// Post routes
router.post("/create", authenticateToken, createPost); // Create a new post
router.put("/update/:postId", authenticateToken, updatePost); // Update a post
router.delete("/delete/:postId", authenticateToken, deletePost); // Delete a post
router.get("/:postId", authenticateToken, getPost); // Get a single post
router.get("/", authenticateToken, getAllPosts); // Get all posts

export default router;
