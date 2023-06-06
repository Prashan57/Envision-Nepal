import { useEffect, useState } from "react";
import {
  postUser,
  getUsers,
  getUserDetail,
  updateUser,
  deleteUser,
} from "../api/user.js";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  //C
  const usePostUser = async ({
    name,
    address,
    email,
    password,
    phone,
    pan,
  }) => {
    setLoading(true);
    await postUser({ name, address, email, password, phone, pan });
    setLoading(false);
  };

  //R
  const useGetUsers = async () => {
    setLoading(true);
    const res = await getUsers();
    setUsers(res);
    setLoading(false);
  };

  const useGetUserByID = async (id) => {
    setLoading(true);
    const res = await getUserDetail({ _id: id });
    setUsers(res);
    setLoading(false);
    return res;
  };
  //U
  const useEditUser = async ({
    _id,
    name,
    address,
    email,
    password,
    phone,
    pan,
  }) => {
    setLoading(true);
    await updateUser({
      _id,
      name,
      address,
      email,
      password,
      phone,
      pan,
    });
    setLoading(false);
  };

  //D
  const useDeleteUser = async (id) => {
    setLoading(true);
    await deleteUser({ _id: id });
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== _id));
    setLoading(false);
  };

  return {
    users,
    loading,
    usePostUser,
    useGetUsers,
    useGetUserByID,
    useEditUser,
    useDeleteUser,
  };
};
