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
  const useAdminPost = async ({}) => {
    setLoading(true);
    await postBid({});
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
  const useEditAdminPost = async ({}) => {
    setLoading(true);
    await updateBid({});
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
