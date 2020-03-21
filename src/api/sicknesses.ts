import axios from "axios";
import { Sickness } from "./../models/types";

export const getSicknesses = (): Promise<Sickness[]> =>
  axios.get("/sicknesses.json").then(response => response.data);
