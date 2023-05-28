import { useEffect, useState } from "react";
import {
  postBid,
  getBid,
  getBidByID,
  updateBid,
  deleteBid,
} from "../api/userBid.js";

export const useUserBid = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBid().then((res) => {
      setDone(res);
      setLoading(false);
    });
  }, []);

  //C
  const useUserBidPost = async ({}) => {
    setLoading(true);
    await postBid({});
    setLoading(false);
  };

  //R
  const useGetUserBidPost = async () => {
    setLoading(true);
    const res = await getBid();
    setDone(res);
    setLoading(false);
  };

  const useGetUserPostByID = async ({ _id }) => {
    setLoading(true);
    const res = await getBidByID({ _id });
    setDone(res);
    setLoading(false);
  };
  //U
  const useEditUserBidPost = async ({}) => {
    setLoading(true);
    await updateBid({});
    setLoading(false);
  };

  //D
  const useDeleteUserBidPost = async ({ _id }) => {
    setLoading(true);
    await deleteBid({ _id });
    setDone((prevUsers) => prevUsers.filter((user) => user._id !== _id));
    setLoading(false);
  };

  return {
    done,
    loading,
    useUserBidPost,
    useGetUserBidPost,
    useGetUserPostByID,
    useEditUserBidPost,
    useDeleteUserBidPost,
  };
};
