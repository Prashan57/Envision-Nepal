import { color } from "../constants/color";

export const mainView = {
  width: "100%",
  // position: "relative",
  display: "flex",
  height:"100%",
};

export const sideBar = {
  width: "16%",
  backgroundColor: color.primaryColor,
  display:"flex",
  flexDirection:"column",
  position: "fixed",
  height: "100vh",
  color: "white",
  fontSize: "20px",
  overflow: "auto",
  alignItems:"Center"
};

export const content = {
  flex: 1,
  marginLeft:"14%",
  padding:"20px",
  overflowY: "scroll",
  // width: "80%",
  // position: "relative",
};
