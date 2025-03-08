import { useState } from 'react';
import Post from '../components/posts';

const MyPosts = () => {
  // Static logged-in user
  const loggedInUser = 'Aryan Singh';

  // Posts state
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Aryan Singh',
      userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: '2 hours ago',
      content: 'Enjoying a beautiful sunset!',
      image: 'https://source.unsplash.com/random/400x300',
    },
    {
      id: 2,
      username: 'Aryan Singh',
      userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      timestamp: '3 hours ago',
      content: 'Just finished a great book! 📖',
      image: 'https://source.unsplash.com/random/400x301',
    },
    {
      id: 3,
      username: 'Aryan Singh',
      userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: '1 day ago',
      content: 'Hiking up the mountains! 🏔️',
      image: 'https://source.unsplash.com/random/400x302',
    },
    {
      id: 4,
      username: 'John Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      timestamp: '5 hours ago',
      content: 'Had an amazing coffee today ☕',
      image: 'https://source.unsplash.com/random/400x303',
    },
  ]);

  // Filter posts to show only the logged-in user's posts
  const userPosts = posts.filter((post) => post.username === loggedInUser);

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
      <header className="bg-white shadow-md py-4 sticky top-0 z-10 w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900">My Posts</h1>
      </header>

      {/* Posts Container */}
      <main className="flex flex-col items-center p-4 md:p-6">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <Post key={post.id} post={post} onDelete={handleDelete} onEdit={handleEdit} />
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center mt-6">
              You haven't posted anything yet.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyPosts;
