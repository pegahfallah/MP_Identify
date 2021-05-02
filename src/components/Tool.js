import React, { useContext } from "react";
// import "./Tool.css";
import { ThemeContext } from "./ThemeProvider";
import AppBar from "./AppBar";
import Footer from "./Footer";
export default function Tool() {
  const state = useContext(ThemeContext);
  const container = {
    backgroundColor: state.theme.primary,
  };
  const text = {
    color: state.theme.text,
  };

  const btn = {
    borderRadius: "25px",
    padding: "3px",
    width: "150px",
    fontFamily: "Work Sans",
    background: state.theme.primary,
    color: "cyan",
    border: "1px solid cyan",
    fontSize: "16px",
    transition: "1.5s",
    borderRadius: "100px",
  };

  return (
    <>
      <AppBar />
      <div>
        <img src="./unknown.png" width="500px"></img>
      </div>
      <Footer></Footer>
    </>
  );
}