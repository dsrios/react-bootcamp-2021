import { ActionTypes } from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export type UserType = string;

export type UserObjectType = {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type addUserAction = {
  type: ActionTypes.ADD_USER;
  payload: UserType;
}

export type fetchUsersAction = {
  type: ActionTypes.FETCH_USERS;
  payload: UserType[];
}

export function addUser(payload: UserType) : addUserAction {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
}

export const getUsers = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get<{ data: UserObjectType[] }>('https://reqres.in/api/users?page=2')
    const names = data.data.map((user: UserObjectType ) => user.first_name)
    dispatch({
      type: 'FETCH_USERS',
      payload: names
    })
  }
  /* return (dispatch: Dispatch) => {
    axios.get<UserObjectType[]>('https://reqres.in/api/users?page=2')
      .then(({ data }) => {
        const names = data.map((user: UserObjectType ) => user.first_name)
        dispatch({
          type: 'FETCH_USERS',
          payload: names
        })
      }) 
  } */
}
