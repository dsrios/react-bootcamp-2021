import { ADD_USER } from "./actionTypes";

export function addUser(payload: any) {
  return {
    type: ADD_USER,
    payload
  };
}
