import React, { useState } from "react";
import Layout from "../layouts/index";
import { useNavigate } from "react-router-dom";
import { useUserBid } from "../hooks/useUserBid";
import { color } from "../constants/color";

const UserBidPayment = () => {
  const navigate = useNavigate();
  const { useUserBidPost } = useUserBid();

  const [data, setData] = useState({
    title: "",
    bidAmount: "",
    email: "",
    PAN: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await useUserBidPost(data);
      console.log(data);
      window.location.href = "https://forms.gle/28pUojwLx7FmHc8p8";
    } catch (e) {
      console.log("Error pushing bid Data from user", e);
    }
  };

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "25px", fontWeight: "bold" }}>
            Submit Details for making your bid:
          </div>
        </div>
        <hr />
        <br />

        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "inherit",
                margin: "10px",
              }}
            >
              Name of applicant :
            </p>
            <input
              type="text"
              placeholder="Enter your name"
              value={data.title}
              required
              onChange={(e) => setData({ ...data, title: e.target.value })}
              style={{
                border: "1px solid black",
                width: "98%",
                padding: "10px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "inherit",
                margin: "10px",
              }}
            >
              Training amount / Bid amount :
            </p>{" "}
            <input
              type="Number"
              placeholder="Bid amount that you want to place"
              required
              value={data.bidAmount}
              onChange={(e) => setData({ ...data, bidAmount: e.target.value })}
              style={{
                border: "1px solid black",
                width: "98%",
                padding: "10px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "inherit",
                margin: "10px",
              }}
            >
              PAN number :
            </p>{" "}
            <input
              type="number"
              placeholder="XXXXXXXXXXXX"
              required
              value={data.PAN}
              onChange={(e) => setData({ ...data, PAN: e.target.value })}
              style={{
                border: "1px solid black",
                width: "98%",
                padding: "10px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "inherit",
                margin: "10px",
              }}
            >
              Email address for getting bids info :
            </p>{" "}
            <input
              type="email"
              placeholder="example@gmail.com "
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              style={{
                border: "1px solid black",
                width: "98%",
                padding: "10px",
                margin: "5px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "15px",
              margin: "10px",
              backgroundColor: color.primaryColor,
              color: color.textColor,
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "unset",
              borderRadius: "10px",
              width: "97.5%",
            }}
          >
            Place your bid
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UserBidPayment;
