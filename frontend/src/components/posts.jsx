import { useState } from 'react';
import { Heart, MessageSquare, Trash, Pencil } from 'lucide-react';

const Post = ({ post, onDelete, onEdit }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 max-w-lg w-full mx-auto transition-transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={post.userAvatar}
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
      <p className="text-gray-700 text-lg mb-3">{post.content}</p>

      {/* Post Image (if available) */}
      {post.image && (
        <div className="rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-1 transition-all ${
            liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>

        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-all">
          <MessageSquare className="w-5 h-5" />
          <span>Comment</span>
        </button>

        <button
          onClick={() => onEdit(post.id)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-all"
        >
          <Pencil className="w-5 h-5" />
          <span>Edit</span>
        </button>

        <button
          onClick={() => onDelete(post.id)}
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
