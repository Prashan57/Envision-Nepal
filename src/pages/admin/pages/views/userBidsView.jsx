import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminPage from "../..";
import { color } from "../../../../constants/color";
import { useUserBid } from "../../../../hooks/useUserBid";

const UserBidsView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { useGetUserPostByID, useDeleteUserBidPost } = useUserBid();

  const [data, setData] = useState({ title: "", bidAmount: "", email: "" });

  useEffect(() => {
    if (params.id) {
      useGetUserPostByID(params.id)
        .then((res) => {
          console.log("response ===>", params.id, res);
          setData(res);
        })
        .catch((e) => console.log(e));
    }
  }, [params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = params.id;
    await useDeleteUserBidPost(id);
    alert(`User: ${data.title} is deleted`);
    navigate("/admin/bidsPlaced");
  };

  return (
    <AdminPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            font: "inherit",
            fontWeight: "bold",
            fontSize: "30px",
            margin: "15px",
          }}
        >
          User Detail of {data.title}
        </div>

        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              font: "inherit",
              fontWeight: "normal",
              fontSize: "18px",
              margin: "15px",
            }}
          >
            <table
              width={"40%"}
              style={{
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <tr>
                <td>Email Address</td>
                <td>
                  <b>{data.email}</b>
                </td>
              </tr>
              <tr>
                <td>Bid Amount</td>
                <td>
                  <b>{data.bidAmount}</b>
                </td>
              </tr>
            </table>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                padding: "15px",
                margin: "15px",
                backgroundColor: color.primaryColor,
                color: color.textColor,
                fontWeight: "bold",
                fontSize: "15px",
                fontFamily: "unset",
                borderRadius: "10px",
                width: "97.5%",
              }}
              onClick={handleDelete}
            >
              Delete user bid
            </button>
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default UserBidsView;
