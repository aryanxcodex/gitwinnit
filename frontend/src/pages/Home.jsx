import { useState } from 'react';
import Post from '../components/posts';

const Home = () => {
  // Dummy posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'John Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: '2 hours ago',
      content: 'Enjoying a beautiful sunset!',
      image: 'https://source.unsplash.com/random/400x300',
    },
    {
      id: 2,
      username: 'Jane Smith',
      userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      timestamp: '3 hours ago',
      content: 'Just finished a great book! 📖',
      image: 'https://source.unsplash.com/random/400x301',
    },
    {
      id: 3,
      username: 'Alex Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      timestamp: '5 hours ago',
      content: 'Loving this new coffee spot ☕',
      image: 'https://source.unsplash.com/random/400x302',
    },
  ]);

  // Handle Delete Post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Handle Edit Post
  const handleEdit = (id) => {
    console.log('Edit post:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Posts Container */}
      <main className="flex flex-col items-center p-6">
        <div className="w-full max-w-2xl">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post key={post.id} post={post} onDelete={handleDelete} onEdit={handleEdit} />
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center mt-6">No posts available</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
