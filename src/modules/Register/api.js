import axiosInstance from "@/lib/axios";

export const register = async (data) => {
  return await axiosInstance.post("/auth/register", data);
};
