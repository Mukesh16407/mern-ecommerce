import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "./ActionType";

const initialState = {
  user: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case REMOVE_ACTIVE_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return { ...state };
  }
};
export default authReducer;
