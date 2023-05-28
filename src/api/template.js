import axiosInstance from "./axiosInstance";

//C
export const postUser = async ({}) => {
  const result = await axiosInstance.post("/", {});
  return result.data;
};

//R
export const getUsers = async ({}) => {
  const result = await axiosInstance.get("/", {});
  return result.data;
};

export const getUserByID = async ({ _id }) => {
  const result = await axiosInstance.get(`//${_id}`);
  return result.data;
};

//U
export const updateUser = async ({}) => {
  const result = await axiosInstance.put("/", {});
  return result.data;
};

//D
export const deleteUser = async ({ _id }) => {
  const result = await axiosInstance.delete(`//${_id}`);
  return result.data;
};
