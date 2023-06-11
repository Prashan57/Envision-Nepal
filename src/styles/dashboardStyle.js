import { color } from "../constants/color";

export const mainView = {
  width: "100vw",
  // position: "relative",
  display: "flex",
  
  height:"100vh",
};

export const sideBar = {
  paddingLeft:"20px",
  width: "19%",
  backgroundColor: color.primaryColor,
  display:"flex",
  flexDirection:"column",
  position: "fixed",
  height: "100vh",
  color: "white",
  fontSize: "20px",
  overflow: "auto",
  alignItems:"start"
};

export const content = {
  flex: 1,
  marginLeft:"17%",
  padding:"20px",
  overflowY: "scroll",

  // width: "80%",
  // position: "relative",
};
