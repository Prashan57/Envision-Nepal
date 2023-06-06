import React from "react";
import { useUsers } from "../../hooks/useUser.js";
import { useAdmin } from "../../hooks/useAdminBid.js";
import { useUserBid } from "../../hooks/useUserBid.js";
import { sideBar, content, mainView } from "../../styles/dashboardStyle.js";
import { Link } from "react-router-dom";
import { color } from "../../constants/color.js";

const AdminPage = ({ children }) => {
  // const { users } = useUsers();
  // const { post } = useAdmin();
  // const { done } = useUserBid();
  // console.log("hello");
  // console.log(users.map((user) => user.name));
  // console.log(post.map((post) => post.title));
  // console.log(done.map((user) => user.title));
  return (
    <div style={mainView}>
      <div style={sideBar}>
        <Link to="/">
          <b
            style={{
              fontSize: "30px",
              fontWeight: "inherit",
              color: color.textColor,
            }}
          >
            ⤆Envision Nepal
          </b>
        </Link>
        <br />
        <br /> <Link to="/admin/home">Home</Link>
        <br /> <Link to="/admin/usersList">Users</Link>
        <br /> <Link to="/admin/bidsCreated">Post Training </Link>
        <br /> <Link to="/admin/training">Training</Link>
        <br /> <Link to="/admin/bidsPlaced">Bids Placed</Link>
      </div>
      <div style={content}>{children}</div>
    </div>
  );
};

export default AdminPage;
