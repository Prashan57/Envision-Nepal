import React, { useEffect, useState } from "react";
import AdminPage from "../..";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../../../hooks/useAdminBid";
import { color } from "../../../../constants/color";

const AdminBidPostsView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { useGetAdminPostByID, useEditAdminPost, useDeleteAdminPost } =
    useAdmin();

  const [view, setView] = useState(true);
  const [data, setData] = useState({
    title: "",
    bidAmount: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      useGetAdminPostByID(params.id).then((res) => {
        setData(res);
      });
    }
  }, [params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = params.id;
    await useDeleteAdminPost(id);
    alert(`${data.title} is deleted.`);
    navigate("/admin/training");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const id = params.id;
    await useEditAdminPost({
      _id: params.id,
      ...data,
    });
    setView(true);
    navigate("/admin/training");
  };

  return (
    <AdminPage>
      {view && (
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
              justifyContent: "space-between",
              font: "inherit",
              fontWeight: "bold",
              fontSize: "30px",
              margin: "15px",
            }}
          >
            <div style={{ marginTop: "18px" }}>Post Detail {data.title}</div>
            <div>
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
                }}
                onClick={handleDelete}
              >
                Delete Post
              </button>
            </div>
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
                <tr>
                  <td>Description: </td>
                  <td>
                    <b>{data.description}</b>
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
                onClick={() => {
                  setView(false);
                  navigate(`/admin/postDetail/${params.id}/edit`);
                }}
              >
                Edit Post
              </button>
            </div>
          </div>
        </div>
      )}
      {!view && (
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
            Post Detail {data.title}
          </div>

          <hr />
          <form onSubmit={handleEdit}>
            <div style={{ margin: "10px" }}>
              <p
                style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}
              >
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
              <p
                style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}
              >
                Training amount / Bid amount :
              </p>{" "}
              <input
                type="Number"
                placeholder="Bid Amount"
                required
                value={data.bidAmount}
                onChange={(e) =>
                  setData({ ...data, bidAmount: e.target.value })
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
              <p
                style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}
              >
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
              <p
                style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}
              >
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
              Edit Training Data
            </button>
          </form>
        </div>
      )}
    </AdminPage>
  );
};

export default AdminBidPostsView;
