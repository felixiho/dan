import axiosInstance from "@/lib/axios";

export const getUser = async () => {
  return await axiosInstance.get("/user");
};
