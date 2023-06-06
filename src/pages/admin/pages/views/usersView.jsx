import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../../../../hooks/useUser";
import AdminPage from "../..";
import { color } from "../../../../constants/color";

const UsersView = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { useGetUserByID, useDeleteUser } = useUsers();

  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    pan: "",
  });

  useEffect(() => {
    if (params.id) {
      useGetUserByID(params.id)
        .then((res) => {
          console.log("response ===>", params.id, res);
          setData(res);
        })
        .catch((e) => console.log(e));
    }

    console.log("Setting user data ======>", data);
  }, [params.id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = params.id;
    await useDeleteUser(id);
    alert(`User: ${data.name} is deleted`);
    navigate("/admin/usersList");
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
          User Detail of {data.name}
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
                <td>Address</td>
                <td>
                  <b>{data.address}</b>
                </td>
              </tr>
              <tr>
                <td>Phone Number </td>
                <td>
                  <b>{data.phone}</b>
                </td>
              </tr>
              <tr>
                <td>PAN</td>
                <td>
                  <b>{data.pan}</b>
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
              Delete User
            </button>
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default UsersView;
