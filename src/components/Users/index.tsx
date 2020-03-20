import React from "react";
import UsersList from "./UsersList";

export interface IUsersProps {}

export interface IUsersState {
  users: string[];
  selectedName: string | null;
}

const users = ["Michael", "Lindsay", "Tobias", "Byron", "George", "Rachel"];

export default class Users extends React.Component<IUsersProps, IUsersState> {
  constructor(props: IUsersProps) {
    super(props);
    this.state = {
      users,
      selectedName: null
    };
  }

  selectUser = (name: string): void => {
    this.setState({ selectedName: name });
  };

  render() {
    return (
      <React.Fragment>
        <form action=""></form>
        <UsersList
          users={this.state.users}
          selectUser={this.selectUser}
          selectedName={this.state.selectedName}
        />
      </React.Fragment>
    );
  }
}
