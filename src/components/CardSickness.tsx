import React from "react";
import "./cardSickness.css";
type SicknessProps = {
  id: string;
  name: string;
  img: string;
  isActive: boolean;
  scientificNotation: string;
  desc: string;
  setSickness: any;
};

export const CardSickness = (props: SicknessProps): JSX.Element => (
  <div className={props.isActive ? "card-active" : "card"}>
    <ul>
      <li>Name: {props.name}</li>
      <li>img: {props.img}</li>
      <li>scientificNotation: {props.scientificNotation}</li>
      <li>desc: {props.desc}</li>
      <button onClick={() => props.setSickness(props.id)}>Set Sickness</button>
    </ul>
  </div>
);
