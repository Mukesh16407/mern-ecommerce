import {LOGGED_IN_USER,LOGOUT_USER} from '../actionType/actionType'

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID: null,
  };
export function userReducer(state=initialState,action){

    switch(action.type){
        case LOGGED_IN_USER:
        return action.payload;
        case LOGOUT_USER:
            return action.payload;
        default:
            return state;
    }
}