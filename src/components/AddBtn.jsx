import React from "react";
import clsx from "clsx";

const AddBtn = ({ small, pale, black, blue, title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ maxWidth: small ? "35px" : "unset" }}
      // className={`btn btn-add${blue ? " blue" : ""}${black ? " black" : ""} ${
      //   className && className
      // }`}
      className={clsx(
        "btn btn-add",
        { blue, black, pale },
        { "p-0": small },
        { "justify-content-center": small }
      )}
    >
      {blue || black || pale ? (
        <img
          className={clsx("add", { "m-0": small })}
          src="./assets/vectors/add-blue.svg"
          alt="add"
        />
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
