import React, { useState } from "react";
import AdminPage from "..";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../../hooks/useAdminBid";

const BidsCreated = () => {
  const navigate = useNavigate();
  const { useAdminPost } = useAdmin();

  const [data, setData] = useState({
    title: "",
    bidAmount: "",
    description: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await useAdminPost(
        // title: data.title,
        // bidAmount: data.bidAmount,
        // description: data.description,
        // email: data.email,
        data
      );
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log("Error pushing data Admin Post", e);
    }
  };
  return (
    <AdminPage>
      <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div style={{ fontSize: "40px", fontWeight: "inherit" }}>
            Create Bids
          </div>
          <div>
            <button
              style={{
                border: "1px solid black",
                padding: "15px",
                margin: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Bids Created
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <p style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>
              Title of training :
            </p>
            <input
              type="text"
              placeholder="Title"
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
            <p style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>
              Training amount / Bid amount :
            </p>{" "}
            <input
              type="Number"
              placeholder="Bid Amount"
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
            <p style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>
              Training Description :
            </p>{" "}
            <input
              type="text"
              placeholder="Description"
              required
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              style={{
                border: "1px solid black",
                width: "98%",
                padding: "10px",
                margin: "5px",
              }}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <p style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>
              Email address for getting bids info :
            </p>{" "}
            <input
              type="email"
              placeholder="Email "
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
              border: "1px solid black",
              padding: "15px",
              margin: "10px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "inherit",
              fontSize: "20px",
              fontFamily: "unset",
              borderRadius: "10px",
              width: "97.5%",
            }}
          >
            Post Training for Bid
          </button>
        </form>
      </div>
    </AdminPage>
  );
};

export default BidsCreated;
