import express from "express";
const router = express.Router();
// COntroller created, import them

// Comment routes
router.post("/:postId/comment", (req, res) => {}); // Add a comment
router.put("/comment/:commentId", (req, res) => {}); // Edit a comment
router.delete("/comment/:commentId", (req, res) => {}); // Delete a comment
router.get("/:postId/comments", (req, res) => {}); // Get all comments on a post

export default router;
