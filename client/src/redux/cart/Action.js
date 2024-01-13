import { ADD_TO_CART } from "./CartActionType";

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};
