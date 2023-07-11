import React, { useContext } from "react";
import Layout from "../layouts";
import { useAdmin } from "../hooks/useAdminBid";
import { color } from "../constants/color";
import "../styles/homeListCard.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/usercontext";

const TrainingList = () => {
  const { post } = useAdmin();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
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
            marginBottom: "20px",
          }}
        >
          Training List
        </div>
        <hr />
        {!isLoggedIn && (
          <div style={{ color: "gray" }}>Please Login For placing a bid</div>
        )}
        <div style={{ width: "100%", height: "100%", marginBottom: "5px" }}>
          {post.map((post) => {
            return (
              <div class="cardList" style={{ width: "100%" }} key={post._id}>
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
                    Bid Security : <b>Rs. {post.bidAmount}</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {isLoggedIn && (
                      <button
                        style={{
                          fontSize: "12px",
                          margin: "7px",
                          padding: "15px",
                          fontWeight: "inherit",
                          backgroundColor: color.primaryColor,
                          color: color.textColor,
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          navigate(`/bidPlacement/${post._id}`);
                        }}
                      >
                        Place a bid
                      </button>
                    )}
                    <button
                      style={{
                        fontSize: "12px",
                        padding: "15px",
                        margin: "7px",
                        fontWeight: "inherit",
                        backgroundColor: color.primaryColor,
                        color: color.textColor,
                        borderRadius: "10px",
                      }}
                      onClick={() => {
                        navigate(`/bidDetails/${post._id}`);
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
