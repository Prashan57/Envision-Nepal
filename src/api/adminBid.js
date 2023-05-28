import axiosInstance from "./axiosInstance";

//C
export const postBid = async ({ title, bidAmount, description, email }) => {
  const result = await axiosInstance.post("/api/admin/registerBid", {
    title,
    bidAmount,
    description,
    email,
  });
  return result.data;
};

//R
export const getBid = async () => {
  const result = await axiosInstance.get("/api/admin/getRegisteredBid");
  return result.data;
};

export const getBidByID = async ({ _id }) => {
  const result = await axiosInstance.get(`/api/admin/getRegisteredBid/${_id}`);
  return result.data;
};

//U
export const updateBid = async ({
  _id,
  title,
  bidAmount,
  description,
  email,
}) => {
  const result = await axiosInstance.put(`/api/admin/registeredBid/${_id}`, {
    title,
    bidAmount,
    description,
    email,
  });
  return result.data;
};

//D
export const deleteBid = async ({ _id }) => {
  const result = await axiosInstance.delete(
    `/api/admin/deleteRegisteredBid/${_id}`
  );
  return result.data;
};
