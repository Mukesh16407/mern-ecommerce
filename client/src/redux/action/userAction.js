import {LOGGED_IN_USER,LOGOUT_USER} from '../actionType/actionType'


export const loginUser=(payload)=>({
    type:LOGGED_IN_USER,
    payload
})
export const logOutUser=()=>({
    type:LOGOUT_USER, 
})
 
