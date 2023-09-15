import axios from "axios";

export function useAxios() {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  axiosInstance.interceptors.request.use((request) => {
    return request;
  });

  return { axiosInstance };
}
