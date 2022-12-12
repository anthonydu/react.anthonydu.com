import React from "react";
import "./main.scss";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="Main">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default Main;