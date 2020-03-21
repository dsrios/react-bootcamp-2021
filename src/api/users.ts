export const login = (email: string, password: string) =>
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  }).then(response => response.json());
