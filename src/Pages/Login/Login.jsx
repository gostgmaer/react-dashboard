import React, { useEffect, useRef, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
const Login = () => {
  const { changelogout } = useGlobalContext();

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  let Focus = useRef(null);

  useEffect(() => {}, []);

  const loginsubmit = () => {
    const data = {
      user: username,
      pass: pass,
    };
    console.log(data);
    changelogout();
  };

  return (
    <div className="Login">
      <div className="login-form-wrap">
        <div className="heading">
          {" "}
          <h2>Login</h2>
        </div>
        <div className="login-form">
          <div className="form-control">
            <input
              type="email"
              value={username}
              ref={Focus}
              onChange={(e) => setUsername(e.target.value)}
              id="email"
              autoComplete="false"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              name="password"
              autoComplete="false"
              placeholder="**********"
              required
            />
          </div>
          <div className="btn-login">
            <button onClick={loginsubmit} id="login" className="loginBtn">
              Login
            </button>
          </div>
        </div>
        <div className="create-account-wrap">
          <div className="signupaccount">
            Not a member? <Link to="/singup">Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
