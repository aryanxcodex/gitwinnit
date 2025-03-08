import express from "express";
const router = express.Router();
// Controller created, import them

// Like routes
router.post("/:postId/like", (req, res) => {}); // Like a post
router.delete("/:postId/unlike", (req, res) => {}); // Unlike a post
router.get("/:postId/likes", (req, res) => {}); // Get all likes on a post

export default router;
