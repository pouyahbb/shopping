import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "./../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCardHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
