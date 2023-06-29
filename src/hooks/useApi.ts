import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    try {
      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  signin: async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  logout: async () => {
    return { status: true };
  },
});
