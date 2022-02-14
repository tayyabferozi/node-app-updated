import React from "react";

const Switch = ({ ...rest }) => {
  return (
    <label className="switch">
      <input type="checkbox" {...rest} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
