import React from "react";

type ContextProps = {
  isLoggedIn: boolean | null;
  token: string | null;
};

export const MyContext = React.createContext<ContextProps>({
  isLoggedIn: true,
  token: ''
});
