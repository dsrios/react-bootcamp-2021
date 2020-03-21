import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

import { login } from "../../api/users";

type LoginState = {
  username: string;
  password: string;
  isLogggedIn: boolean;
};

export class Login extends React.Component<{}, LoginState> {
  state = {
    username: "",
    password: "",
    isLogggedIn: false
  };
  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value } as any);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(this.state.username, this.state.password).then(response =>
      this.setState({ isLogggedIn: true })
    );
  };

  /*  
  Submit using Refs
 handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.inputRef.current?.value);
  }; */

  render() {
    return (
      !this.state.isLogggedIn && (
        <form action="#" onSubmit={this.handleSubmit}>
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <Input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleInput}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleInput}
          />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
      )
    );
  }
}
