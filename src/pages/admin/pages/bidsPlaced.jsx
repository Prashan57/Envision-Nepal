import React from "react";
import AdminPage from "..";
import { useUserBid } from "../../../hooks/useUserBid";
import { color } from "../../../constants/color";
import { useNavigate } from "react-router-dom";

const BidsPlaced = () => {
  const navigate = useNavigate();
  const { done } = useUserBid();
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
          User's Bid List
        </div>

        <hr />
        <div>
          {done.map((d) => {
            return (
              <div class="cardList" style={{ width: "100%" }} key={d._id}>
                <div>
                  Bid Title : <br />
                  <b>{d.title}</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    Bid Amount : <b>$ {d.bidAmount}</b>
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
                      onClick={() => navigate(`/admin/userBidPosts/${d._id}`)}
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

export default BidsPlaced;
