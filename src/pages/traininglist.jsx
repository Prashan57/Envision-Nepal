import React from "react";
import Layout from "../layouts";
import { useAdmin } from "../hooks/useAdminBid";
import { color } from "../constants/color";
import "../styles/homeListCard.css";

const TrainingList = () => {
  const { post } = useAdmin();
  return (
    <Layout>
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
        <div
          style={{width:"100%",height:"100%",marginBottom:"5px"}}>
          {post.map((post) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%" , }}
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
    </Layout>
  );
};

export default TrainingList;
