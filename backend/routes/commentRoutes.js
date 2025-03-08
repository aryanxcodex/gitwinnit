import express from "express";
const router = express.Router();
import { addComment, deleteComment } from "../controllers/commentController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

// Comment routes
router.post("/:postId/comment",authenticateToken, addComment); // Add a comment
router.put("/comment/:commentId", authenticateToken, (req, res) => {}); // Edit a comment
router.delete("/comment/:commentId",authenticateToken, deleteComment); // Delete a comment
router.get("/:postId/comments",authenticateToken, (req, res) => {}); // Get all comments on a post

export default router;
