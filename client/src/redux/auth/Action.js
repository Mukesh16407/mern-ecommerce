import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "./ActionType";

export function setActiveUser(user) {
  return { type: SET_ACTIVE_USER, payload: user };
}

export function removeActiveUser() {
  return { type: REMOVE_ACTIVE_USER };
}
