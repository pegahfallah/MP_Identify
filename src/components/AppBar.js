import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleTheme from "./ToggleTheme";

const AppBar = () => {
  const state = useContext(ThemeContext);

  const appBar = {
    marginTop: "-30px",
    backgroundColor: state.theme.primary,
    width: "100%",
    height: "6vh",
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
      <img style={icon} src="./mp.gif"></img>
      <h1>Microplastic Indicator</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Community</li>
      </ul>
      <ToggleTheme />
    </div>
  );
};

export default AppBar;
