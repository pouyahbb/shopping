import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isSignInGoogle,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${inverted ? "inverted" : ""} ${
        isSignInGoogle ? "google-sign-in" : ""
      }  button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
