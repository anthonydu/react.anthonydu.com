import React from "react";
import "./floatingLabel.scss";

const FloatingLabel = (props) => {
  const FormControl = props.as === "textarea" ? "textarea" : "input";

  return (
    <div className="FloatingLabel form-floating">
      <FormControl className="form-control" id={props.name} {...props} />
      <label for={props.name}>{props.label}</label>
    </div>
  );
}

export default FloatingLabel;