import React from "react";
import AdminPage from "..";
import { useAdmin } from "../../../hooks/useAdminBid";
import { color } from "../../../constants/color";
import { useNavigate } from "react-router-dom";

const AdminTraining = () => {
  const navigate = useNavigate();
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
                key={post._id}
              >
                <div>
                  Post Title <br />
                  <b>{post.title}</b>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    Bid Amount : <b>$ {post.bidAmount}</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      style={{
                        fontSize: "12px",
                        padding: "15px",
                        margin: "10px 35px 0 0",
                        fontWeight: "inherit",
                        backgroundColor: color.primaryColor,
                        color: color.textColor,
                        borderRadius: "10px",
                      }}
                      onClick={() => {
                        navigate(`/admin/postDetail/${post._id}`);
                      }}
                    >
                      View Details
                    </button>
                  </div>
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
