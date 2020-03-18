import React from "react";
import { CardSickness } from "./components/CardSickness";
import { getSicknesses } from "./api/sicknesses";

type AppState = {
  counter: number;
  sicknessState: any[];
  sicknessId: number | null;
};

export default class AppLifeCycle extends React.Component<{}, AppState> {
  private inputRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      sicknessState: [],
      sicknessId: null
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

  render() {
    return (
      <React.Fragment>
        <input type="text" value="hola" ref={this.inputRef} />
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
