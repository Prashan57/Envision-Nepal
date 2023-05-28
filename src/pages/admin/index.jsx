import React from "react";
import { useUsers } from "../../hooks/useUser.js";
import { useAdmin } from "../../hooks/useAdminBid.js";
import { useUserBid } from "../../hooks/useUserBid.js";

const AdminPage = () => {
  const { users } = useUsers();
  const { post } = useAdmin();
  const { done } = useUserBid();
  console.log("hello");
  console.log(users.map((user) => user.name));
  console.log(post.map((post) => post.title));
  console.log(done.map((user) => user.title));
  return (
    <div>
      <div>AdminPage</div>
    </div>
  );
};

export default AdminPage;
