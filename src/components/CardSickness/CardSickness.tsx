import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Delete from "@material-ui/icons/Delete";
import Star from "@material-ui/icons/Star";

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

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

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
  const classes = useStyles();

  React.useEffect(() => {
    return () => {
      console.log("Me desapareci " + name);
    };
  }, [name]);

  return (
    <Card className={isActive ? "card-active" : "card"}>
      <CardMedia className={classes.media} image={img} title={name} />
      <CardContent>
        <ul>
          <li>Name: {name}</li>
          <li>scientificNotation: {scientificNotation}</li>
          <li>desc: {desc}</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button onClick={() => setSickness(id)}>
          <Star />
        </Button>
        <Button onClick={() => deleteSickness(id)}>
          <Delete />
        </Button>
      </CardActions>
    </Card>
  );
};
