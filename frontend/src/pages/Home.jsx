import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/posts', {
        withCredentials: true,
      });
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.post(
        `http://localhost:8000/api/posts/${postId}/like`,
        {},
        { withCredentials: true }
      );
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, likes: post.likes + 1, liked: true } : post
        )
      );
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Home Feed</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="bg-white p-5 rounded-lg shadow-md mb-6">
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={post.user.avatar || 'https://via.placeholder.com/40'}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{post.user.name}</h2>
                <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-700">{post.content}</p>

            {post.image && <img src={post.image} alt="Post" className="w-full rounded-lg my-3" />}

            {/* Actions */}
            <div className="flex items-center gap-5 mt-3">
              <button
                onClick={() => handleLike(post._id)}
                className="flex items-center gap-1 text-gray-600 hover:text-red-500"
              >
                {post.liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                <span>{post.likes}</span>
              </button>

              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
                <FaRegComment />
                <span>{post.comments.length}</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
