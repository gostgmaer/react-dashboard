import React, { Fragment, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Signup.scss";
import firebase from "../../Utils/Authentication/Firebase";
import { useGlobalContext } from "../../Context/Context";
import Loading from "../../Utils/Loading/Loading";
import { useAuth } from "../../Context/Auth";

const Signup = () => {
  const { isloading, setIsloading, success, setSuccess } = useGlobalContext();
  const { signup, currentUser,setCurrentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerUser = () => {
    if (pass !== confirmPass) {
      setError("password not match");
    } else {
      setLoading(true);
      const data = { email: email, password: pass, fname: name };

      createUserWithEmailAndPassword(firebase, email, pass)
        .then((auth) => {
          console.log(auth);
          setError(null);
            
        })
        .catch((error) => {
          setError(
            <div className="errorMessage">
              <div className="title">Faild to Create Your Account</div>{" "}
              <div className="error">{error.message}</div>
            </div>
          );
        });
    }
    setLoading(false);
  };

  const signupHandler = async () => {
    const data = {
      cpass: confirmPass,
      pass: pass,
      email: email,
    };
    if (pass !== confirmPass) {
      setError("password not match");
    } else {
      try {
        setLoading(true);
        setError("");
        await signup(email, pass);
      } catch (e) {
        setError(
          <div className="errorMessage">
            <div className="title">Faild to Create Your Account</div>{" "}
            <div className="error">{e.message}</div>
          </div>
        );
      }
    }

    console.log(data);
    setLoading(false);
  };

  const MessageComponent = () => {
    return (
      <div className="message">
        <div className="messageWrapper">
          <div className="content">
            {error === "" ? (
              <Fragment>
                <div className="heading">{"Registration Success"}</div>
                <Link className="btn" to={"/login"}>
                  Login
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <div className="heading">{error}</div>
                <button
                  className="btn"
                  onClick={() => {
                    setError(null);
                  }}>
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
      {isloading ? (
        <Loading></Loading>
      ) : (
        <Fragment>
          {success !== null || error !== null ? (
            <MessageComponent></MessageComponent>
          ) : (
            <div className="Signup">
              <div className={`signup-form-wrap ${error && "message"}`}>
                {error ? (
                  <MessageComponent />
                ) : (
                  <Fragment>
                    {" "}
                    <div className="heading">
                      <h2>Signup</h2>
                    </div>
                    <div className="signup-form">
                      <div className="form-control">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
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
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="password"
                          onChange={(e) => setConfirmPass(e.target.value)}
                          id="confirmPass"
                          name="confirmPass"
                          autoComplete="off"
                          value={confirmPass}
                          placeholder="confirm Password"
                          required
                        />
                      </div>
                      <div className="btn-signup">
                        <button
                          onClick={registerUser}
                          id="signup" disabled={loading}
                          className="signupBtn">
                          Sign up
                        </button>
                      </div>
                    </div>
                    <div className="create-account-wrap">
                      <div className="signupaccount">
                        Have a Account? <Link to="/login">Login</Link>
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Signup;
