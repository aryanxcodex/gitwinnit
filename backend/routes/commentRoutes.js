import express from "express";
const router = express.Router();
import { addComment, deleteComment } from "../controllers/commentController";

// Comment routes
router.post("/:postId/comment", addComment); // Add a comment
router.put("/comment/:commentId", (req, res) => {}); // Edit a comment
router.delete("/comment/:commentId", deleteComment); // Delete a comment
router.get("/:postId/comments", (req, res) => {}); // Get all comments on a post

export default router;
