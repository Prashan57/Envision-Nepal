import axiosInstance from "./axiosInstance";

//C
export const postUser = async ({
  name,
  address,
  email,
  password,
  phone,
  pan,
}) => {
  const result = await axiosInstance.post("/api/register", {
    name,
    address,
    email,
    password,
    phone,
    pan,
  });
  return result.data;
};

//R
export const getUsers = async () => {
  const result = await axiosInstance.get("/api/registeredUsers");
  return result.data;
};

export const getUserDetail = async ({ _id }) => {
  const result = await axiosInstance.get(`/api/registeredUsers/${_id}`);
  console.log(result.data);
  return result.data;
};

//U
export const updateUser = async ({
  _id,
  name,
  address,
  email,
  password,
  phone,
  pan,
}) => {
  const result = await axiosInstance.put(`/api/registeredUsers/${_id}`, {
    name,
    address,
    email,
    password,
    phone,
    pan,
  });
  return result.data;
};

//D
export const deleteUser = async ({ _id }) => {
  const result = await axiosInstance.delete(
    `/api/deleteRegisteredUsers/${_id}`
  );
  return result.data;
};
