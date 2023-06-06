import { color } from "../constants/color";

export const mainView = {
  // width: "100%",
  display: "flex",
  flexDirection: "row",
};

export const sideBar = {
  // width: "20%",
  backgroundColor: color.primaryColor,

  flex: 0.2,
  // position: "fixed",
  height: "100vh",
  color: "white",
  fontSize: "20px",
  paddingTop: "10px",
  paddingLeft: "30px",
};

export const content = {
  flex: 0.8,
  overflowY: "scroll",
  // width: "80%",
  // position: "relative",
};
