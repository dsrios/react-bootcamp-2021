export const getSicknesses = () =>
  fetch("https://healthweb.free.beeceptor.com/sicknesses").then(response =>
    response.json()
  );
