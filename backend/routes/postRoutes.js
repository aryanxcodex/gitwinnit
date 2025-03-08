import express from "express";
const router = express.Router();
import {
  deletePost,
  createPost,
  updatePost,
  getAllPosts,
  getPost,
} from "../controllers/postControllers.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

// Post routes
router.post("/create", authenticateToken, createPost); // Create a new post
router.put("/:postId", authenticateToken, updatePost); // Update a post
router.delete("/:postId", authenticateToken, deletePost); // Delete a post
router.get("/:postId", authenticateToken, getPost); // Get a single post
router.get("/", authenticateToken, getAllPosts); // Get all posts

export default router;
