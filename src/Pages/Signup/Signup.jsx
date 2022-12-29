import React, { Fragment, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Signup.scss";
import firebase from "../../Utils/Authentication/Firebase";
import { useGlobalContext } from "../../Context/Context";
import Loading from "../../Utils/Loading/Loading";
import { useAuth } from "../../Context/Auth";



const Signup = () => {
  const { isloading, setIsloading,success, setSuccess,error, setError } = useGlobalContext();
  const { login,currentUser, setCurrentUser } = useAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");


  const registerUser = () => {
    setIsloading(true)
    const data = { email: email, password: pass, fname: name };
    createUserWithEmailAndPassword(firebase, email, pass)
      .then((auth) => {
        console.log(auth);
        setError(null)
       
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
      setIsloading(false)
  };

  const MessageComponent = () => {
    return (
      <div className="message">
        <div className="messageWrapper">
          <div className="content">
            {error===null ?(
              <Fragment>
                <div className="heading">{'egistration Success'}</div>
                <Link className="btn" to={"/login"}>
                  Login
                </Link>
                <button
                  className="btn"
                  onClick={() => {
                    setSuccess(null);
                    setError(null);
                  }}>
                  Signup Again
                </button>
              </Fragment>
            ) : (
              <Fragment>
                <div className="heading">{error}</div>
                <button
                  className="btn"
                  onClick={() => {
                    setSuccess(null);
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
   <Fragment>{isloading?<Loading></Loading>: <Fragment>
   {success !== null || error !== null ? (
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
               onChange={(e) => setname(e.target.value)}
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
               placeholder="**********"
               required
             />
           </div>
           <div className="btn-signup">
             <button
               onClick={registerUser}
               id="signup"
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
       </div>
     </div>
   )}
 </Fragment>}</Fragment>
  );
};

export default Signup;
