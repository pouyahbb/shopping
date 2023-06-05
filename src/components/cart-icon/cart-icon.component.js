import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCardHidden()),
});

export default connect(null, mapDispathToProps)(CartIcon);
