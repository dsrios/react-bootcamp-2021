import React, { Fragment } from "react";
import { CardSickness } from "./components/CardSickness";

import "./App.css";

type UserProps = {
  name: string;
  age?: number;
  lastname?: string;
};

type UserState = {
  counter: number;
  updated: boolean;
  sicknessId: string;
};

const sicknesses = [
  {
    id: "1",
    name: "CoronaVirus",
    scientificNotation: "covid-19",
    desc: "Enfermedad super mega peligrosa! millenials!",
    img:
      "https://celiacos.org/wp-content/uploads/2020/03/coronavirus-768x432.jpeg"
  },
  {
    id: "2",
    name: "Sida",
    scientificNotation: "VIH",
    desc: "use condom guys",
    img:
      "https://celiacos.org/wp-content/uploads/2020/03/coronavirus-768x432.jpeg"
  }
];

export class App extends React.Component<UserProps> {
  state: UserState = { counter: 0, updated: false, sicknessId: "" };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  setSickness = (id: string) => {
    this.setState({ sicknessId: id });
  };

  componentDidMount() {
    document.title = `${this.state.counter}`;
  }

  componentDidUpdate(prevProps: UserProps, prevState: UserState) {
    if (this.state.sicknessId === "2") {
      alert(`Usted tiene ${sicknesses[1].name}`);
    }
  }

  render() {
    return (
      <Fragment>
        <span>Counter: {this.state.counter} </span>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {sicknesses.map(sickness => (
          <CardSickness
            key={sickness.id}
            id={sickness.id}
            name={sickness.name}
            scientificNotation={sickness.scientificNotation}
            desc={sickness.desc}
            img={sickness.img}
            isActive={sickness.id === this.state.sicknessId}
            setSickness={this.setSickness}
          />
        ))}
      </Fragment>
    );
  }
}
