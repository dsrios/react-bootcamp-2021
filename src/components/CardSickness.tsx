import React from "react";
import "./cardSickness.css";

type SicknessProps = {
  id: number;
  name: string;
  img?: string;
  isActive?: boolean;
  scientificNotation?: string;
  desc?: string;
  setSickness: (id: number) => void;
  deleteSickness: (id: number) => void;
};

export const CardSickness = ({
  name,
  isActive,
  img,
  desc,
  scientificNotation,
  id,
  setSickness,
  deleteSickness
}: SicknessProps): JSX.Element => {
  React.useEffect(() => {
    return () => {
      console.log("Me desapareci " + name);
    };
  }, [name]);

  return (
    <div className={isActive ? "card-active" : "card"}>
      <ul>
        <li>Name: {name}</li>
        <li>img: {img}</li>
        <li>scientificNotation: {scientificNotation}</li>
        <li>desc: {desc}</li>
        <button onClick={() => setSickness(id)}>Set Sickness</button>
        <button onClick={() => deleteSickness(id)}>Delete Sickness</button>
      </ul>
    </div>
  );
};
