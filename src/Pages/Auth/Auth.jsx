import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { MdOutlineCopyright } from "react-icons/md";


const Auth = () => {
   const [showSignIn, setShowSignIn] = useState(true);

   const handleSignInClick = () => {
     setShowSignIn(true);
   };

   const handleSignUpClick = () => {
     setShowSignIn(false);
   };


  return (
    <>
      <section className={classes.auth}>
        <Link to={"/"} className={classes.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>

        {/* here the signin or singup page */}
        {showSignIn ? (
          <SignIn onSignUpClick={handleSignUpClick} />
        ) : (
          <SignUp onSignInClick={handleSignInClick} />
        )}

        <hr />
        <div className={classes.login_foot}>
          <div className={classes.login_foot_link}>
            <Link>Conditions of Use</Link>
            <Link>Privacy Notice</Link>
            <Link>Help</Link>
          </div>
          <small>
            <MdOutlineCopyright /> 1996-2024,Amazon.com,Inc,or its affillates
          </small>
        </div>
      </section>
    </>
  );
};

export default Auth;
