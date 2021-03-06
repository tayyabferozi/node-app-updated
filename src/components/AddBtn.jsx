import React from "react";
import clsx from "clsx";

const AddBtn = ({
  noIcon,
  bg,
  small,
  pale,
  black,
  blue,
  title,
  className,
  gradient,
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      style={{ maxWidth: small ? "35px" : "unset" }}
      className={clsx(
        "btn btn-add",
        { blue, black, pale, bg },
        { "btn-gradient": gradient },
        { "p-0": small },
        { "justify-content-center": small },
        className
      )}
      {...rest}
    >
      {blue || black || pale || gradient ? (
        !noIcon && (
          <img
            className={clsx("add", { "m-0": small })}
            src="./assets/vectors/add-blue.svg"
            alt="add"
          />
        )
      ) : (
        <img
          className={clsx("add", { "m-0": small })}
          src="./assets/vectors/add.svg"
          alt="add"
        />
      )}
      {!small && <> {title || "ADD"}</>}
    </button>
  );
};

export default AddBtn;
