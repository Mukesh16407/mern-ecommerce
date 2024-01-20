import { ADD_TO_CART, SET_VISIBLE } from "./CartActionType";

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const setDrawerVisible = (payload) => {
  return {
    type: SET_VISIBLE,
    payload,
  };
};
