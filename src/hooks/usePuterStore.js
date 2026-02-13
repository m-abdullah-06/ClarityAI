import { create } from 'zustand';

const usePuterStore = create((set, get) => ({
  // State
  isLoading: false,
  error: null,
  puterReady: false,
  user: null,
  isAuthenticated: false,

  // Initialize Puter
  init: () => {
    if (window.puter) {
      set({ puterReady: true });
      get().checkAuth();
      return;
    }

    const interval = setInterval(() => {
      if (window.puter) {
        clearInterval(interval);
        set({ puterReady: true });
        get().checkAuth();
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      if (!window.puter) {
        set({ error: 'Puter.js failed to load' });
      }
    }, 10000);
  },

  // Auth methods
  checkAuth: async () => {
    try {
      const isSignedIn = await window.puter.auth.isSignedIn();
      if (isSignedIn) {
        const user = await window.puter.auth.getUser();
        set({ user, isAuthenticated: true });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      set({ user: null, isAuthenticated: false });
    }
  },

  signIn: async () => {
    try {
      set({ isLoading: true, error: null });
      await window.puter.auth.signIn();
      await get().checkAuth();
      set({ isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  signOut: async () => {
    try {
      set({ isLoading: true });
      await window.puter.auth.signOut();
      set({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // KV Store methods
  kvGet: async (key) => {
    try {
      return await window.puter.kv.get(key);
    } catch (error) {
      console.error('KV get error:', error);
      return null;
    }
  },

  kvSet: async (key, value) => {
    try {
      return await window.puter.kv.set(key, value);
    } catch (error) {
      console.error('KV set error:', error);
      return false;
    }
  },

  kvDelete: async (key) => {
    try {
      return await window.puter.kv.delete(key);
    } catch (error) {
      console.error('KV delete error:', error);
      return false;
    }
  },

  kvList: async (prefix = '') => {
    try {
      return await window.puter.kv.list(prefix, true);
    } catch (error) {
      console.error('KV list error:', error);
      return [];
    }
  },

  // AI methods
  chat: async (prompt, options = {}) => {
    try {
      const response = await window.puter.ai.chat(prompt, options);
      return response;
    } catch (error) {
      console.error('AI chat error:', error);
      throw error;
    }
  },

  // File storage methods
  fsWrite: async (path, data) => {
    try {
      return await window.puter.fs.write(path, data);
    } catch (error) {
      console.error('FS write error:', error);
      throw error;
    }
  },

  fsRead: async (path) => {
    try {
      return await window.puter.fs.read(path);
    } catch (error) {
      console.error('FS read error:', error);
      throw error;
    }
  },

  fsDelete: async (path) => {
    try {
      return await window.puter.fs.delete(path);
    } catch (error) {
      console.error('FS delete error:', error);
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));

export default usePuterStore;
