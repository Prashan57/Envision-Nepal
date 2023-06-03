import { useEffect, useState } from "react";
import {
  postBid,
  getBid,
  getBidByID,
  updateBid,
  deleteBid,
} from "../api/adminBid.js";

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBid().then((res) => {
      setPost(res);
      console.log(res);
      setLoading(false);
    });
  }, []);

  //C
  const useAdminPost = async ({ title, bidAmount, description, email }) => {
    setLoading(true);
    await postBid({ title, bidAmount, description, email });
    setLoading(false);
  };

  //R
  const useGetAdminPost = async () => {
    setLoading(true);
    const res = await getBid();
    setPost(res);
    setLoading(false);
  };

  const useGetAdminPostByID = async ({ _id }) => {
    setLoading(true);
    const res = await getBidByID({ _id });
    setPost(res);
    setLoading(false);
  };
  //U
  const useEditAdminPost = async ({
    _id,
    title,
    bidAmount,
    description,
    email,
  }) => {
    setLoading(true);
    await updateBid({ _id, title, bidAmount, description, email });
    setLoading(false);
  };

  //D
  const useDeleteAdminPost = async ({ _id }) => {
    setLoading(true);
    await deleteBid({ _id });
    setPost((prevUsers) => prevUsers.filter((user) => user._id !== _id));
    setLoading(false);
  };

  return {
    post,
    loading,
    useAdminPost,
    useGetAdminPost,
    useGetAdminPostByID,
    useEditAdminPost,
    useDeleteAdminPost,
  };
};
