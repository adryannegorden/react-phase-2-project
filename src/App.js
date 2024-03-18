import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;