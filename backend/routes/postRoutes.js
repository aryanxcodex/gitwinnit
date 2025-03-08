import express from "express";
const router = express.Router();
// Controller not created yet


// Post routes
router.post("/create", (req, res) => {}); // Create a new post
router.put("/update/:postId", (req, res) => {}); // Update a post
router.delete("/delete/:postId", (req, res) => {}); // Delete a post
router.get("/:postId", (req, res) => {}); // Get a single post
router.get("/", (req, res) => {}); // Get all posts

export default router;
