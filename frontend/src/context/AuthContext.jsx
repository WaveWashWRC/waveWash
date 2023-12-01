import {createContext } from "react";

const authContext = createContext({
  isAuthenticated : false,
})

export default authContext;