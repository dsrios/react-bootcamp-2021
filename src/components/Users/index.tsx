import React from "react";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import UsersList from "./UsersList";

export interface IUsersProps {}

export interface IUsersState {
  users: string[];
  selectedName: string | null;
}

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

export default class Users extends React.Component<IUsersProps, IUsersState> {
  constructor(props: IUsersProps) {
    super(props);
    this.state = {
      users: USERS,
      selectedName: null
    };
  }

  selectUser = (name: string): void => {
    this.setState({ selectedName: name });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <Input placeholder="name"></Input>
          <Button>Add</Button>
        </form>
        <UsersList
          users={this.state.users}
          selectUser={this.selectUser}
          selectedName={this.state.selectedName}
        />
      </React.Fragment>
    );
  }
}
