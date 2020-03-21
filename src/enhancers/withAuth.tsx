import React from "react";
import { login } from "../api/users";

export interface withAuthProps {
  email: string;
  password: string;
}

export interface withAuthState {
  isLoggedIn: boolean;
}

export default function withAuth(Component: any) {
  class WithAuth extends React.Component<withAuthProps, withAuthState> {
    static displayName = `WithAuth(${Component.displayName ||
      Component.name ||
      "Component"})`;

    constructor(props: withAuthProps) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      login(this.props.email, this.props.password).then(response =>
        this.setState({ isLoggedIn: true })
      );
    }

    render() {
      return <Component {...this.props} isLoggedIn={this.state.isLoggedIn} />;
    }
  }

  return WithAuth;
}
