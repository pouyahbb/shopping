import React from "react";
import "./signin.styles.scss";
import FormInput from "../forn-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      setValues({ email: "", password: "" });
    } catch (err) {
      return alert(err);
    }
  };
  const handleChnage = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="signin">
      <h2>I already have an account</h2>
      <span> Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          handleChange={handleChnage}
          value={values.email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          handleChange={handleChnage}
          value={values.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton isSignInGoogle onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
