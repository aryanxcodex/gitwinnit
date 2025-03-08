import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      // Function to update authentication state after login
      login: (userData) => {
        set({ user: userData, isAuthenticated: true });
      },

      // Function to logout user
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage", // Key name in localStorage
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);

export default useAuthStore;
