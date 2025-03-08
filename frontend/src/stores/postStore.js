import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:8000/posts';

const usePostStore = create((set, get) => ({
  posts: [],
  loading: false,
  error: null,

  // Fetch all posts
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}`, { withCredentials: true });
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch posts', loading: false });
    }
  },

  // Fetch a single post by ID
  fetchPostById: async (postId) => {
    try {
      const response = await axios.get(`${API_URL}/${postId}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      set({ error: 'Failed to fetch post' });
    }
  },

  // Create a new post
  createPost: async (postData) => {
    try {
      const response = await axios.post(`${API_URL}/create`, postData, { withCredentials: true });
      set((state) => ({ posts: [response.data.post, ...state.posts] }));
    } catch (error) {
      set({ error: 'Failed to create post' });
    }
  },

  // Update a post
  updatePost: async (postId, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/update/${postId}`, updatedData, {
        withCredentials: true,
      });
      set((state) => ({
        posts: state.posts.map((post) => (post._id === postId ? response.data.post : post)),
      }));
    } catch (error) {
      set({ error: 'Failed to update post' });
    }
  },

  // Delete a post
  deletePost: async (postId) => {
    try {
      await axios.delete(`${API_URL}/delete/${postId}`, { withCredentials: true });
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== postId),
      }));
    } catch (error) {
      set({ error: 'Failed to delete post' });
    }
  },
}));

export default usePostStore;
