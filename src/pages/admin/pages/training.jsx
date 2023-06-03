import React from "react";
import AdminPage from "..";
import { useAdmin } from "../../../hooks/useAdminBid";

const AdminTraining = () => {
  const { post } = useAdmin();
  return (
    <AdminPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "inherit",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Training List
        </div>

        <hr />
        <div>
          {post.map((post) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%", alignSelf: "center", margin: "20px" }}
              >
                <div>
                  Post Title : <br />
                  <b>{post.title}</b>
                </div>
                <div>
                  Bid Amount : <b>$ {post.bidAmount}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminPage>
  );
};

export default AdminTraining;
