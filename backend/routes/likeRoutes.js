import express from "express";
const router = express.Router();
import { likePost, unlikePost } from "../controllers/likeControllers.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

// Like routes
router.post("/:postId/like", authenticateToken, likePost); // Like a post
router.delete("/:postId/unlike", authenticateToken, unlikePost); // Unlike a post
router.get("/:postId/likes", authenticateToken, (req, res) => {}); // Get all likes on a post

export default router;
