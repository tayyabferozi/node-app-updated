import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import FancyInput from "../components/FancyInput";

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: "john.doe@gmail.com",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };
  return (
    <AuthLayout rightImg="./assets/vectors/auth-right-3.svg" rootClass="step-3">
      <h1>
        Node. <br />
        Let's Sign In
      </h1>
      <p className="text-light-1 mt-3">Enter your details to proceed further</p>

      <form action="" className="form">
        <FancyInput
          embossed={false}
          lightLabel
          icon="vectors/mail.svg"
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formState.email}
          onChange={inputChangeHandler}
        />
        <FancyInput
          embossed={false}
          lightLabel
          icon="vectors/lock.svg"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formState.password}
          placeholder="Start typing.."
          onChange={inputChangeHandler}
        />

        <div className="remember d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row mb-sm-0 mb-4">
          <div className="radio-container">
            <label className="custom-radio">
              Remember me
              <input
                type="checkbox"
                onChange={inputChangeHandler}
                defaultValue={"checked"}
                name="gender"
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <a href="#0" className="fw-500 mt-sm-0 mt-3">
            Recover password
          </a>
        </div>

        <div className="text-center text-sm-start">
          <Link to="/360" className="btn btn-primary mt-4">
            Signin
          </Link>
        </div>
      </form>

      <div className="social d-flex align-items-center">
        <button className="btn">
          <img src="./assets/vectors/twitter.svg" alt="twitter" />
        </button>
        <button className="btn">
          <img src="./assets/vectors/google.svg" alt="google" />
        </button>
        <button className="btn">
          <img src="./assets/vectors/fb.svg" alt="fb" />
        </button>
        <button className="btn">
          <div className="text-light-2 fs-14">Or sign in with</div>
        </button>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
