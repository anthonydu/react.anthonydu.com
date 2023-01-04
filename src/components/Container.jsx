import React from "react";
import "./container.scss";

const Container = ({ header, children }) => {

  return (
    <div className="Container">
      <div className="header">
        <h1>{header}</h1>
      </div>
      {children}
    </div>
  );
}

export default Container;