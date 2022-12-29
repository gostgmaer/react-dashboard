import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./login.scss";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../Utils/Authentication/Firebase";
import { AuthContext, useAuth } from "../../Context/Auth";
import Loading from "../../Utils/Loading/Loading";

const Login = () => {

  const { isloading, setIsloading,success, setSuccess,error, setError } = useGlobalContext();
const { login,currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  

  let Focus = useRef(null);

  useEffect(() => {}, []);

  // const handleLogin = () => {
  //   login(username);
  //   navigate(redirectPath, { replace: true });
  // };

  window.onload = () => {
    setIsloading(true)
    setCurrentUser(null)
    setSuccess(null)
    setError(null)
    
    setIsloading(false)
  };

 

  const loginsubmit = () => {
    setIsloading(true);
    const data = {
      user: username,
      pass: pass,
    };
    console.log(data);
    // changelogout();
    signInWithEmailAndPassword(firebase, username, pass)
      .then((res) => {
        console.log(res.user);
        setCurrentUser(res.user)
        setSuccess("login Success");
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    setIsloading(false);
  };



  useEffect(() => {
    
 console.log(success);
  }, [success]);
  const MessageComponent = () => {
    return (
      <div className="message">
        <div className="messageWrapper">
          <div className="content">
            {success ? (
              <Fragment>
                <div className="heading">{success}</div>
               
              </Fragment>
            ) : (
              <Fragment>
                <div className="heading">{error}</div>
                <button className="btn" onClick={() => {setSuccess(null);setError(null)}}>
                  Try Again
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {isloading ? (
        <Loading></Loading>
      ) : success !== null || error!==null ? (
        <MessageComponent></MessageComponent>
      ) : (
        <div className="Login" >
          <div className="login-form-wrap">
            <div className="heading">
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
      )}
    </Fragment>
  );
};

export default Login;
