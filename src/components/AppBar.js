import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleTheme from "./ToggleTheme";
import "./AppBar.css";
const AppBar = () => {
  const state = useContext(ThemeContext);

  const appBar = {
    backgroundColor: state.theme.primary,
    height: "5vh",
    color: state.theme.text,
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Work Sans",
  };
  const icon = {
    width: "80px",
    height: "80px",
  };
  return (
    <div style={appBar}>
      {/* <img style={icon} src="./mp.gif"></img> */}
      <h1>Microplastic Indicator</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Community</li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
