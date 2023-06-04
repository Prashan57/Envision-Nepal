import axiosInstance from "./axiosInstance";

//C
export const loginUserApi= async({
  email,
  password
})=>{
  const result= await axiosInstance.post("/api/loginUser",{
    email,
    password
  })
  return result.data
}

export const passwordLinkApi= async({
  email,
})=>{
  const result= await axiosInstance.post("/api/sendpasswordlink",{
    email,
  })
  return result.data
}

export const resetPasswordApi= async({
  id,
  password,
  token,
})=>{
  const result= await axiosInstance.post(`/api/resetPassword/:${id}/:${token}`,{
    password
  })
  return result.data
}

export const getResetPasswordApi= async({
  id,token
})=>{
  const result= await axiosInstance.get(`/api/resetPassword/:${id}/:${token}`);
  return result.data
}

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
