export const getSicknesses = () =>
  fetch("/sicknesses.json").then(response => response.json());
