import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../assets/4.1 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { signedOut } from "../../redux/user/user.actions";

const Header = ({ currentUser, signOut }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            onClick={() => {
              auth.signOut();
              signOut(null);
            }}
            className="option"
          >
            SIGNOUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: (user) => dispatch(signedOut(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
