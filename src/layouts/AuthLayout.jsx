import React from "react";

const AuthLayout = ({ children, rootClass, rightImg }) => {
  return (
    <>
      <div id="auth" className={rootClass}>
        <div className="left">
          <div className="main">{children}</div>
        </div>
        <div className="right">
          <img src={rightImg} alt="vector" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
