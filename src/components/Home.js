import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "./ThemeProvider";

export default function Home() {
  const state = useContext(ThemeContext);
  const container = {
    backgroundColor: state.theme.primary,
  };

  return (
    <div style={container} className="container">
      <div className="text">
        <h1 className="h1">
          voluptates <span className="rainbow-text">magnam. </span>tenetur.
        </h1>
        <h2 className="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet
          in optio, quibusdam ea voluptatibus architecto quisquam velit. Unde,
          necessitatibus.
        </h2>
      </div>
      <img className="img" src="./dot.png"></img>
    </div>
  );
}
