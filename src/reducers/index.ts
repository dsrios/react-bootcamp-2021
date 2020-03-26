import { ADD_USER } from "./../actions/actionTypes";
import { AnyAction } from "redux";

const USERS = [
  "Michael",
  "Lindsay",
  "Tobias",
  "Byron",
  "Rachel",
  "Daniel",
  "Adam",
  "Alex",
  "Aaron",
  "Ben",
  "Carl",
  "Dan",
  "David",
  "Edward",
  "Fred",
  "Frank",
  "George",
  "Peter",
  "Roger",
  "Victor",
  "Walter",
  "Hal",
  "Hank",
  "Ike",
  "John",
  "Monte",
  "Jack",
  "Joe",
  "Larry",
  "Matthew",
  "Steve",
  "Thomas",
  "Tim",
  "Ty",
  "Mark",
  "Nathan",
  "Otto",
  "Paul"
];

const initialState = {
  users: USERS
};

export type RootState = {
  users: string[];
};

export function rootReducer(
  state: RootState = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case ADD_USER:
      /*      return Object.assign({}, state, {
        users: state.users.concat(action.payload)
      }); */
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
}

export default rootReducer;
