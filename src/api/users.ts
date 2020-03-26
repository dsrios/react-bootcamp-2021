import axios from "axios";

export const login = (email: string, password: string) =>
  axios.post<{ token: string }>("https://reqres.in/api/login", {
    email,
    password
  });
