import React from "react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MailIcon from "@material-ui/icons/Mail";

type CounterState = {
  counter: number;
};

export class Counter extends React.Component<{}, CounterState> {
  state = { counter: 0 };

  increment = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <ButtonGroup
        color="primary"
        size="small"
        aria-label="outlined primary button group"
      >
        <Button onClick={this.increment}>Increment</Button>
        <Button onClick={this.decrement}>Decrement</Button>
        <Badge color="secondary" badgeContent={this.state.counter}>
          <MailIcon />
        </Badge>
      </ButtonGroup>
    );
  }
}
