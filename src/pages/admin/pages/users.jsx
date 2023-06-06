import React from "react";
import AdminPage from "..";
import { useUsers } from "../../../hooks/useUser";
import { color } from "../../../constants/color";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const navigate = useNavigate();
  const { users } = useUsers();

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
          User's List
        </div>

        <hr />
        <div>
          {users.map((user) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%", alignSelf: "center", margin: "20px" }}
                key={user._id}
              >
                <div>
                  Username : <b>{user.name}</b>
                  <br />
                  Email : <b>{user.email}</b>
                </div>
                <div>
                  PAN : <b> {user.pan}</b>
                  <br />
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
                    onClick={() => navigate(`/admin/userDetail/${user._id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminPage>
  );
};

export default UsersList;
