import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Signup.scss";
import firebase from "../../Utils/Authentication/Firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");
  const [successmessage, setSuccessmessage] = useState("Success");
  const [errormsg, setErrormsg] = useState("Error");
  const [isSuccess, setIsSuccess] = useState(null);
  const ProtectedRoute = useNavigate();


  const registerUser = () => {
    const data = { email: email, password: pass, fname: name };
    createUserWithEmailAndPassword(firebase, email, pass)
      .then((auth) => {console.log(auth); {ProtectedRoute('/login')} })
      .catch((error) => console.error(error));
    // setIsSuccess(false);
  };

  const MessageComponent = () => {
    return (
      <div className="message">
        <div className="messageWrapper">
          <div className="content">
            {isSuccess ? (
              <Fragment>
                <div className="heading">{successmessage}</div>
                <Link className="btn" to={"/login"}>
                  Login
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <div className="heading">{errormsg}</div>
                <button className="btn" onClick={() => setIsSuccess(null)}>
                  Signup Again
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };

  // const SignupComp = () => {
  //   return (
   
  //   );
  // };

  return (
    <Fragment>
      {isSuccess !== null ? (
        <MessageComponent></MessageComponent>
      ) : (
        <div className="Signup">
        <div className="signup-form-wrap">
          <div className="heading">
            <h2>Signup</h2>
          </div>
          <div className="signup-form">
            <div className="form-control">
              <input
                type="text"
                onChange={(e)=>setname(e.target.value)}
                id="Name"
                name="Name"
                autoComplete="off"
                value={name}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                id="email"
                autoComplete="off"
                name="email"
                placeholder="Email Address"
                value={email}
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
            <div className="btn-signup">
              <button onClick={registerUser} id="signup" className="signupBtn">
                Sign up
              </button>
            </div>
          </div>
          <div className="create-account-wrap">
            <div className="signupaccount">
              Have a Account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
      )}
    </Fragment>
  );
};

export default Signup;

