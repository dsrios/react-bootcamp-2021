import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addUser, getUsers, UserType, addUserAction } from "../../actions/index";

//import withAuth from "../../enhancers/withAuth";
//import AuthProvider from "../../enhancers/AuthProvider";
import { MyContext } from "../../enhancers/AuthContext";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import UsersList from "./UsersList";

import { RootState } from "../../reducers";

export interface IUsersProps {
  users: string[];
  addUser: (user: UserType) => void
  getUsers: typeof getUsers;
}

export interface IUsersState {
  //users: string[];
  selectedName: string | null;
  name: string;
}

class Users extends React.Component<IUsersProps, IUsersState> {
  constructor(props: IUsersProps) {
    super(props);
    this.state = {
      //users: this.props.users,
      selectedName: null,
      name: ""
    };
  }

  componentDidMount() {
    this.props.getUsers()
  }

  selectUser = (name: string): void => {
    this.setState({ selectedName: name });
  };

  handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.props.addUser(this.state.name)
    //this.setState({ users: [...this.state.users, this.state.name] });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <MyContext.Consumer>
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
        </MyContext.Consumer>
        <UsersList
          users={this.props.users}
          selectUser={this.selectUser}
          selectedName={this.state.selectedName}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { 
    addUser: (user: UserType) => dispatch<addUserAction>(addUser(user)),
    getUsers: () => dispatch(getUsers() as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
