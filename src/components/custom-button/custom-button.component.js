import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isSignInGoogle, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${isSignInGoogle ? "google-sign-in" : ""}  button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
