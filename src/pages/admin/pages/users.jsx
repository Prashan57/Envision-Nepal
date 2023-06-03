import React from "react";
import AdminPage from "..";
import { useUsers } from "../../../hooks/useUser";

const UsersList = () => {
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
          Training List
        </div>

        <hr />
        <div>
          {users.map((user) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%", alignSelf: "center", margin: "20px" }}
              >
                <div>
                  Username : <b>{user.name}</b>
                  <br />
                  Email : <b>{user.email}</b>
                </div>
                <div>
                  PAN : <b> {user.pan}</b>
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
