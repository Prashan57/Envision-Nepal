import axiosInstance from "./axiosInstance";

//C
export const postBid = async ({ title, bidAmount, email, PAN }) => {
  const result = await axiosInstance.post("/api/registerBid", {
    title,
    bidAmount,
    email,
    PAN,
  });
  return result.data;
};

//R
export const getBid = async () => {
  const result = await axiosInstance.get("/api/getRegisteredBid");
  return result.data;
};

export const getBidByID = async ({ _id }) => {
  const result = await axiosInstance.get(`/api/getRegisteredBid/${_id}`);
  return result.data;
};

//U
export const updateBid = async ({ _id, title, bidAmount, email, PAN }) => {
  const result = await axiosInstance.put(`/api/registeredBid/${_id}`, {
    title,
    bidAmount,
    email,
    PAN,
  });
  return result.data;
};

//D
export const deleteBid = async ({ _id }) => {
  const result = await axiosInstance.delete(`/api/deleteRegisteredBid/${_id}`);
  return result.data;
};
