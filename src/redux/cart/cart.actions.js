import cartActionType from "./cart.types";

export const toggleCardHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});
export const addToCart = (item) => ({
  type: cartActionType.ADD_TO_CART,
  payload: item,
});
