import { SEARCH_QUERY } from "./ActionType";

export const searchReducer = (state = { text: "" }, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
