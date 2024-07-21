import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/Firebase";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { CiWarning } from "react-icons/ci";

import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import { ClipLoader } from "react-spinners";

const SignIn = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [showSignInEmail, setShowSignInEmail] = useState(true);
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setloading] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowSignInEmail(true);
    setError(false);
  };
  const handleContinueClick = () => {
    if (email.trim() !== "") {
      setShowSignInEmail(false);
    }
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const authHandler = (e) => {
    e.preventDefault();
    // if (e.target.name === "signIn") {
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setloading(false);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        setloading(false);
      });
  };

  return (
    <>
      {error && (
        <div className={classes.warning}>
          <div className={classes.warning_symbol}>
            <CiWarning size={30} color="#c40000" />
          </div>
          <div>
            <h4>There was a problem</h4>
            <small>{error}</small>
          </div>
        </div>
      )}
      <section className={classes.login}>
        {showSignInEmail ? (
          <div className={classes.signin_email} id="/email">
            <div className={classes.signin_email_in}>
              <h1>Sign in</h1>
              <form action="">
                <label htmlFor="email">Email or mobile phone number</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  //   onChange={handleEmailChange}
                />
                <button onClick={handleContinueClick}>Continue</button>
              </form>

              <small>
                By continuing, you agree to Amazon's{" "}
                <Link>Conditions of Use </Link>
                and <Link>Privacy Notice</Link>.
              </small>
              <div className={classes.signin_email_link}>
                <Link>Need help?</Link>
                <hr />
                <h4>Buying for work?</h4>
                <Link>Shop on Amazon Business</Link>
              </div>
            </div>
            <div className={classes.signin_email_new}>
              <h5>New to Amazon?</h5>
              <button onClick={onSignUpClick}>
                Create your Amazon account
              </button>
            </div>
          </div>
        ) : (
          <div className={classes.signin_password}>
            <h1>Sign in</h1>
            <span>
              {email}{" "}
              <button to="/email" onClick={handleEmailChange}>
                change
              </button>
            </span>
            <div className={classes.signin_password_pass}>
              <p>Password</p>
              <Link>Forgot your password?</Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setError(false);
                setpassword(e.target.value);
              }}
            />

            {/* the signin handler button */}
            <button type="submit" onClick={authHandler} name="signIn">
              {loading ? <ClipLoader size={15} color="#0066c0" /> : "Sign in"}
            </button>
            <div className={classes.signin_password_check}>
              <p>
                <input type="checkbox" />
                keep me signed in. <Link>Details</Link>
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SignIn;
