import React from "react";
import "./signup.styles.scss";
import FormInput from "../forn-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const Signup = () => {
  const [values, setValues] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      return alert("Passwords don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      createUserProfileDocument(user, { displayName: values.displayName });
      setValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="signup">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormInput
          required
          handleChange={handleChange}
          type="text"
          name="displayName"
          value={values.displayName}
          label="DisplayName"
        />
        <FormInput
          label="Email"
          required
          handleChange={handleChange}
          type="text"
          name="email"
          value={values.email}
        />
        <FormInput
          label="Password"
          required
          handleChange={handleChange}
          type="password"
          name="password"
          value={values.password}
        />
        <FormInput
          label="ConfirmPassword"
          required
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
        />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

export default Signup;
