import React from "react";

//import withAuth from "../../enhancers/withAuth";
import AuthProvider from "../../enhancers/AuthProvider";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import UsersList from "./UsersList";

export interface IUsersProps {
  email: string;
  password: string;
}

export interface IUsersState {
  users: string[];
  selectedName: string | null;
  name: string;
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

class Users extends React.Component<IUsersProps, IUsersState> {
  constructor(props: IUsersProps) {
    super(props);
    this.state = {
      users: USERS,
      selectedName: null,
      name: ""
    };
  }

  selectUser = (name: string): void => {
    this.setState({ selectedName: name });
  };

  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.setState({ users: [...this.state.users, this.state.name] });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <AuthProvider email={this.props.email} password={this.props.password}>
          {({ isLoggedIn, token }) => {
            return (
              isLoggedIn && (
                <form>
                  <span>{token}</span>
                  <Input
                    onChange={this.handleChange}
                    placeholder="name"
                  ></Input>
                  <Button onClick={this.handleSubmit}>Add</Button>
                </form>
              )
            );
          }}
        </AuthProvider>
        <UsersList
          users={this.state.users}
          selectUser={this.selectUser}
          selectedName={this.state.selectedName}
        />
      </React.Fragment>
    );
  }
}

export default Users;
