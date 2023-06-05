import React from "react";
import AdminPage from "..";
import { useUserBid } from "../../../hooks/useUserBid";

const BidsPlaced = () => {
  const { done } = useUserBid();
  return (
    <AdminPage>
      <div className="flex flex-col m-12">
        <div
        className="text-center text-xl font-inherit font-bold mb-11 "
          // style={{
          //   textAlign: "center",
          //   fontSize: "30px",
          //   fontFamily: "inherit",
          //   fontWeight: "bold",
          //   marginBottom: "40px",
          // }}
        >
          User Bid List
        </div>

        <hr />
        <div>
          {done.map((d) => {
            return (
              <div
                class="cardList"
                style={{ width: "100%", alignSelf: "center", margin: "20px" }}
              >
                <div>
                  Bid Title : <br />
                  <b>{d.title}</b>
                </div>
                <div>
                  Bid Amount : <b>$ {d.bidAmount}</b>
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
