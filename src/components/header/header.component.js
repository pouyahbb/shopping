import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../assets/4.1 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { signedOut } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, signOut, hidden }) => {
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
        <CartIcon />
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signedOut(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
