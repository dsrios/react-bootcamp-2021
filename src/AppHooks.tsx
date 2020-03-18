import React, { Fragment, useState, useEffect } from "react";
import { CardSickness } from "./components/CardSickness";

const sicknesses = [
  {
    id: 1,
    name: "CoronaVirus",
    scientificNotation: "covid-19",
    desc: "Enfermedad super mega peligrosa! millenials!",
    img:
      "https://celiacos.org/wp-content/uploads/2020/03/coronavirus-768x432.jpeg"
  },
  {
    id: 2,
    name: "Sida",
    scientificNotation: "VIH",
    desc: "use condom guys",
    img:
      "https://celiacos.org/wp-content/uploads/2020/03/coronavirus-768x432.jpeg"
  }
];

export default function AppHooks(props: any): JSX.Element {
  const [sicknessId, setSicknessId] = useState<number | null>(null);
  const [counter, setCounter] = useState<number>(0);
  const [updated, setUpdated] = useState<boolean>(false);
  const [mergedState, setMergedState] = useState<object | number | null>(null);
  const deleteSickness = (id: number) => {};

  useEffect(() => {
    if (sicknessId === 2) {
      (window as any).sickness = sicknessId;
      alert(`usted tiene ${sicknesses[1].name}`);
    }

    return () => {
      (window as any).sickness = undefined;
    };
  }, [sicknessId]);

  useEffect(() => {
    if (counter > 4) {
      alert(counter);
    }
  }, [counter]);

  return (
    <Fragment>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {sicknesses.map(sickness => (
        <CardSickness
          key={sickness.id}
          isActive={sickness.id === sicknessId}
          setSickness={setSicknessId}
          deleteSickness={deleteSickness}
          {...sickness}
        />
      ))}
    </Fragment>
  );
}
