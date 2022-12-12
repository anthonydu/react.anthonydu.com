import React from "react";
import "./home.scss";
import Bubbles from "./Bubbles";

const Home = () => {
  return (
    <div className="Home" id="Home"> 
      <Bubbles 
        font={"Iceberg"}
        words={["Fast Learner", "Team Player", "Observant", "Motivated", "Curious", "Creative", "Accountable", "Problem\nSolver", "Adaptable", "Critical\nThinker"]}
      />
    </div>
  );
}

export default Home;