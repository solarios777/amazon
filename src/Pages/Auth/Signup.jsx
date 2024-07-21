import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { TbInfoSmall } from "react-icons/tb";
import { auth } from "../../Utility/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { ClipLoader } from "react-spinners";
import { CiWarning } from "react-icons/ci";

const SignUp = ({ onSignInClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    setloading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setloading(false);
      return;
    }

   createUserWithEmailAndPassword(auth, email, password)
     .then((userInfo) => {
       console.log(userInfo);
       dispatch({
         type: Type.SET_USER,
         user: userInfo.user,
       });
       setloading(false);
       navigate("/payment"); 
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
        <div className={classes.signin_email} id="/email">
          <div className={classes.signin_email_in}>
            <h1>Create account</h1>
            <form action="">
              <label htmlFor="email">Mobile number or email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
              />
              <h6 className={classes.signin_passchar}>
                <TbInfoSmall size={30} color="#70BAD5" />
                At least 6 characters
              </h6>
              <label htmlFor="confirmPassword">Re-enter Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setError(false);
                  setConfirmPassword(e.target.value);
                }}
              />

              {/* signuphandler button */}
              <button type="submit" onClick={signUpHandler} name="signUp">
                {loading ? (
                  <ClipLoader color="#0066c0" size={15} />
                ) : (
                  "Continue"
                )}
              </button>
            </form>
            <small>
              By continuing, you agree to Amazon's{" "}
              <Link>Conditions of Use </Link>
              and <Link>Privacy Notice</Link>.
            </small>
            <div className={classes.signin_email_link}>
              <hr />
              <h4>Buying for work?</h4>
              <Link>Shop on Amazon Business</Link>
            </div>

            <span className={classes.signin_already}>
              Already have an account?
              <button onClick={onSignInClick}>Sign in</button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
