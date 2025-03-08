import { useState } from 'react';
import { Heart, MessageSquare, Trash, Pencil } from 'lucide-react';
import usePostStore from '../stores/postStore';
import toast from 'react-hot-toast';

const Post = ({ post, onEdit }) => {
  const { deletePost, likePost } = usePostStore();
  const [liked, setLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes?.length || 0);

  // Handle Like Toggle
  const handleLike = async () => {
    setLiked(!liked);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
    await likePost(post._id);
  };

  // Handle Delete
  const handleDelete = async () => {
    await deletePost(post._id);
    toast.success('Post deleted successfully!');
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 max-w-lg w-full mx-auto transition-transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={post.userAvatar || 'https://via.placeholder.com/50'}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">{post.username}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 text-lg mb-3">{post.caption}</p>

      {/* Post Image (if available) */}
      {post.media && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={post.media}
            alt="Post"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 transition-all ${
            liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span>{liked ? 'Liked' : 'Like'}</span>
          <span className="ml-1 text-sm">{likesCount}</span>
        </button>

        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-all">
          <MessageSquare className="w-5 h-5" />
          <span>Comment</span>
        </button>

        <button
          onClick={() => onEdit(post)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-all"
        >
          <Pencil className="w-5 h-5" />
          <span>Edit</span>
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-all"
        >
          <Trash className="w-5 h-5" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
