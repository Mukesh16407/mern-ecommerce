import {configureStore,combineReducers} from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import productReducer from './slice/ProductSlice';

const rootReducer = combineReducers({
    auth:authReducer,
    product: productReducer,
})

const store = configureStore({
 reducer:rootReducer
})

export default store