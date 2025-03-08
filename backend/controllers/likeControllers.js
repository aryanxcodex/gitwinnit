import Post from "../models/post.model.js";

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
      return res.status(200).json({ message: "Post liked" });
    }

    res.status(400).json({ message: "Post already liked" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter((id) => id.toString() !== userId);
      await post.save();
      return res.status(200).json({ message: "Post unliked" });
    }

    res.status(400).json({ message: "Post not liked yet" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
