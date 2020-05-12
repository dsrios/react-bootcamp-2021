import { ActionTypes } from "./../actions/actionTypes";
import { addUserAction, fetchUsersAction } from "./../actions";

/* const USERS = [
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
]; */

const initialState = {
  users: []
};

export type RootState = {
  users: string[];
};

export function rootReducer(
  state: RootState  = initialState,
  action: addUserAction | fetchUsersAction
) : RootState {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      /*      return Object.assign({}, state, {
        users: state.users.concat(action.payload)
      }); */
      return { ...state, users: [...state.users, action.payload] };
      case ActionTypes.FETCH_USERS:
        return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
