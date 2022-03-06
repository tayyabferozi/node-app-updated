import React from "react";

import clsx from "clsx";

const Switch = ({ className, ...rest }) => {
  return (
    <label className={clsx("switch", className)}>
      <input type="checkbox" {...rest} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
