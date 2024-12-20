// utils/request.js
import axios from 'axios';

export const axiosInstance = axios.create();

export const getConfig = async () => {
  try {
    // Load the base endpoint from app.config.json
    const response = await axios.get("/app.config.json");
    const baseEndPoint = response.data.baseendpoint;

    // Set the base URL for axiosInstance
    axiosInstance.defaults.baseURL = baseEndPoint;

    // Add an interceptor to include the Authorization header for every request
    axiosInstance.interceptors.request.use((config) => {
      const authData = JSON.parse(localStorage.getItem("auth"));
      if (authData?.token) {
        config.headers.Authorization = `Bearer ${authData.token}`;
      }
      return config;
    });
  } catch (error) {
    console.log("Error in connecting frontend to backend:", error);
    throw error;
  }
};
