import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ToggleTheme from "./ToggleTheme";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
      <Player
        autoplay
        src="https://assets6.lottiefiles.com/packages/lf20_zi88tn5r.json"
        style={{ height: "40px", width: "40px", paddingTop: "6px" }}
      ></Player>
      <h1 style={{ fontSize: "20px" }}>Microplastic Indicator</h1>
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
