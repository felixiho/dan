import axiosInstance from "@/lib/axios";

export const login = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};
