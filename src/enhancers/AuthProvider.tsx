import React from "react";
import { login } from "../api/users";

export interface AuthProviderProps {
  email: string;
  password: string;
  children: (state: AuthProviderState) => React.ReactNode;
}

export interface AuthProviderState {
  isLoggedIn: boolean;
  token: string;
}

export default class AuthProvider extends React.Component<
  AuthProviderProps,
  AuthProviderState
> {
  constructor(props: AuthProviderProps) {
    super(props);
    this.state = {
      isLoggedIn: false,
      token: ""
    };
  }

  componentDidMount() {
    login(this.props.email, this.props.password).then(({ data }) =>
      this.setState({ isLoggedIn: true, token: data.token })
    );
  }

  render() {
    return this.props.children(this.state);
  }
}
