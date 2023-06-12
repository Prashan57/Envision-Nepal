import React from "react";
import AdminPage from "..";
import { useUsers } from "../../../hooks/useUser";
import { useAdmin } from "../../../hooks/useAdminBid";
import { useUserBid } from "../../../hooks/useUserBid";

import "../../../styles/homeCard.css";
import "../../../styles/homeListCard.css";
import AdminGraph from "../../../components/adminGraph";
import { color } from "../../../constants/color";
const AdminHome = () => {
  const { users } = useUsers();
  const { post } = useAdmin();
  const { done } = useUserBid();
  const userLength = users.length;
  const postLength = post.length;
  const doneLength = done.length;

  return (
    <AdminPage>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <div class="card">
          Registered users : <b>{userLength}</b>
        </div>
        <div class="card">
          Admin Posts : <b>{postLength}</b>
        </div>
        <div class="card">
          Bids Done : <b>{doneLength}</b>
        </div>
        <div
          class="card"
          style={{
            borderRadius: "8px",
            backgroundColor: color.primaryColor,
            color: "white",
          }}
        >
          <i class="fa-duotone fa-user-tie-hair"></i>
          <b> 🕵 Administrator</b>
        </div>
      </div>
      <div>
        <hr />
        <AdminGraph />
      </div>
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "48%" }}>
          <b
            style={{
              display: "flex",
              fontSize: "22px",
              marginLeft: "20px",
              justifyContent: "center",
            }}
          >
            Users Registered :
          </b>
          <br />
          <hr />
          {users.map((user) => {
            return (
              <div
                class="cardList"
                style={{
                  width: "100%",
                  alignSelf: "center",
                  margin: "10px",
                }}
              >
                <div>
                  Username : <b>{user.name}</b>
                </div>
                <div>
                  PAN :<b>{user.pan}</b>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ width: "48%" }}>
          <b
            style={{
              display: "flex",
              fontSize: "22px",
              marginLeft: "20px",
              justifyContent: "center",
            }}
          >
            Government Training Posts :
          </b>
          <br />
          <hr />
          {post.map((post) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%", alignSelf: "center", margin: "10px" }}
              >
                <div>
                  Post Title : <b>{post.title}</b>
                </div>
                <div>
                  Bid Amount : <b>Rs. {post.bidAmount}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      {/* Bids Placed */}
      <hr />
      <br />
      <div style={{ width: "97.5%", margin: "10px" }}>
        <b
          style={{
            display: "flex",
            fontSize: "22px",
            marginLeft: "20px",
            justifyContent: "center",
          }}
        >
          Bids Placed By Users:
        </b>
        <br />
        <hr />
        {done.map((d) => {
          return (
            <div
              class="cardList"
              style={{
                width: "100%",
                justifyContent: "space-between",
                margin: "10px",
              }}
            >
              <div>
                <b>Email : </b> {d.email}
              </div>
              <div>
                <b>Bid title : </b> {d.title}
              </div>
              <div>
                <b>Bid Amount : </b>Rs. {d.bidAmount}
              </div>
            </div>
          );
        })}
      </div>
    </AdminPage>
  );
};

export default AdminHome;
