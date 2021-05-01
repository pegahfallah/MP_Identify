import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "./ThemeProvider";

export default function Home() {
  const state = useContext(ThemeContext);
  const container = {
    backgroundColor: state.theme.primary,
  };

  return <div style={container} className="container"></div>;
}
