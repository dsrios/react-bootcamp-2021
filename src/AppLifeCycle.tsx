import React from "react";
import { CardSickness } from "./components/CardSickness";
import { getSicknesses } from "./api/sicknesses";
import { login } from "./api/users";

type AppState = {
  counter: number;
  sicknessState: any[];
  sicknessId: number | null;
  username: string;
  password: string;
  isLogggedIn: boolean;
};

export default class AppLifeCycle extends React.Component<{}, AppState> {
  private inputRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      sicknessState: [],
      sicknessId: null,
      username: "",
      password: "",
      isLogggedIn: false
    };
  }

  componentDidMount() {
    getSicknesses().then(sicknesses =>
      this.setState({ sicknessState: sicknesses })
    );
  }

  setCounter = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  deleteSickness = (id: number) => {
    const newSicknesses = this.state.sicknessState.filter(
      sickness => sickness.id !== id
    );
    this.setState({ sicknessState: newSicknesses });
  };

  setSicknessId = (id: number) => {
    this.setState({ sicknessId: id });
  };

  /* handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(this.state.username, this.state.password).then(response =>
      this.setState({ isLogggedIn: true })
    );
  }; */

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.inputRef.current?.value);
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    this.setState({ [event.target.name]: event.target.value } as any);
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.isLogggedIn && (
          <form action="#" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              ref={this.inputRef}
            />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
          </form>
        )}
        <button id="counter-button" onClick={this.setCounter}>
          Increment
        </button>
        <label htmlFor="counter">{this.state.counter}</label>
        {this.state.sicknessState.map(sickness => (
          <CardSickness
            key={sickness.id}
            setSickness={this.setSicknessId}
            deleteSickness={this.deleteSickness}
            {...sickness}
          />
        ))}
      </React.Fragment>
    );
  }
}
