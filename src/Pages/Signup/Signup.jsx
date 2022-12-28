import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");
  const [successmessage, setSuccessmessage] = useState('Success');
  const [errormsg, setErrormsg] = useState("Error");
  const [isSuccess, setIsSuccess] = useState(null);

  const registerUser = () => {
    const data = { email: email, password: pass, fname: name };
    setIsSuccess(false)
  };

  const MessageComponent = () => {
    return (
      <div className="message">
        <div className="messageWrapper">
          <div className="content">
            {isSuccess ? (
              <Fragment>
                <div className="heading">{successmessage}</div>
                <Link className="btn" to={"/login"}>Login</Link>
              </Fragment>
            ) : (
              <Fragment>
                <div className="heading">{errormsg}</div>
                <button className="btn" onClick={()=>setIsSuccess(null)} >Signup Again</button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };

  const SignupComp = () => {
    return (
      <div className="Signup">
        <div className="signup-form-wrap">
          <div className="heading">
            <h2>Signup</h2>
          </div>
          <div className="signup-form">
            <div className="form-control">
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                id="pass"
                name="pass"
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
    );
  };

  return (
    <Fragment>
      {isSuccess !== null ? (
        <MessageComponent></MessageComponent>
      ) : (
        <SignupComp></SignupComp>
      )}
    </Fragment>
  );
};

export default Signup;
