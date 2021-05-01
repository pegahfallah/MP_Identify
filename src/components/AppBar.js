import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const AppBar = () => {
  const state = useContext(ThemeContext);

  const appBar = {
    marginTop: 0,
    backgroundColor: state.theme.primary,
    width: "100%",
    height: "60px",
    color: state.theme.text,
  };

  return (
    <div style={appBar}>
      <h1>Dark and light Theme</h1>
    </div>
  );
};

export default AppBar;
