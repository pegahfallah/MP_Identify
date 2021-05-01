import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Toggle.css";
function ToggleTheme() {
  const state = useContext(ThemeContext);

  const btn = {
    borderRadius: "25px",
    padding: "3px",
    width: "150px",
    background: state.theme.primary,
    color: "cyan",
    border: "5px solid cyan",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "1.5s",
    borderRadius: "100px",
  };

  const container = {
    marginTop: "22px",
  };

  return (
    <div style={container}>
      <button
        variant="contained"
        onClick={() => {
          state.setTheme(state.theme.type);
        }}
        style={btn}
        class="button"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ToggleTheme;
