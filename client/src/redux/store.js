import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./auth/Reducer";
import { searchReducer } from "./search/Reducer";
import { cartReducer } from "./cart/CartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
