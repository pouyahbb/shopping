import React from "react";
import "./signin.styles.scss";
import FormInput from "../forn-input/form-input.component";

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
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

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
