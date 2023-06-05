import React from "react";

import "./signin-signup.styles.scss";
import SignIn from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";

const SignInSignUp = () => {
  return (
    <div className="signin-signup">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SignInSignUp;
