import React from "react";
import { Sickness } from "../../models/types";
import { getSicknesses } from "../../api/sicknesses";

import Container from "@material-ui/core/Container";

import { CardSickness } from "../../components/CardSickness/CardSickness";

type SicknessesState = {
  sicknesses: Sickness[] | null;
  sicknessId: number | null;
};

export class Sicknesses extends React.Component<{}, SicknessesState> {
  state = {
    sicknesses: [],
    sicknessId: null
  };

  setSicknessId = (id: number) => {
    console.log(id);
    this.setState({ sicknessId: id });
  };

  deleteSickness = (id: number) => {
    const newSicknesses = this.state.sicknesses.filter(
      (sickness: Sickness) => sickness.id !== id
    );
    this.setState({ sicknesses: newSicknesses });
  };

  componentDidMount() {
    getSicknesses().then(sicknesses => this.setState({ sicknesses }));
  }

  render() {
    return (
      <Container>
        {this.state.sicknesses.map((sickness: Sickness) => (
          <CardSickness
            key={sickness.id}
            isActive={this.state.sicknessId === sickness.id}
            setSickness={this.setSicknessId}
            deleteSickness={this.deleteSickness}
            {...sickness}
          />
        ))}
      </Container>
    );
  }
}
