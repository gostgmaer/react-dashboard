import logo from "./logo.svg";
import "./App.css";
import MoonLoader from "react-spinners/MoonLoader";
import Spinner from "react-spinkit";
import React from "react";

function App() {
  return (
    <div className="App">
      <Spinner name="pacman" color="green" />
    </div>
  );
}

export default App;
