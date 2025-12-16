import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup } from "../../components/config/firebase";
const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <img src={assets.logo_big} className="logo" alt="Logo" />
      <form className="login-form">
        <h2>{currState}</h2>

        {/* Conditional rendering of the username input */}
        {currState === "Sign up" && (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        )}

        {/* Common email and password inputs */}
        <input
          type="email"
          placeholder="Email address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
          minLength={6}
        />

        {/* Submit Button */}
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>

        {/* Terms and conditions */}
        <div className="login-term">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Agree to the terms of use & privacy policy.
          </label>
        </div>

        {/* Toggle between Login and Sign up */}
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Don't have an account?
              <span onClick={() => setCurrState("Sign up")}>Create one</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
