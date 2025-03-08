import express from "express";
const router = express.Router();
import { likePost, unlikePost } from "../controllers/likeControllers";
import authenticateToken from "../middleware/authMiddleware";

// Like routes
router.post("/:postId/like", authenticateToken, likePost); // Like a post
router.delete("/:postId/unlike", authenticateToken, unlikePost); // Unlike a post
router.get("/:postId/likes", (req, res) => {}); // Get all likes on a post

export default router;
