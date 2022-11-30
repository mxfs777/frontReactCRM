import { createContext } from "react";

const authContext = createContext({
  authData: {
    authenticated: false,
    data: undefined
  },
  setAuthenticated: (auth) => {}
});

export default authContext;