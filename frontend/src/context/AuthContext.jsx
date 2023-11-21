import {createContext } from "react";

const authContext = createContext({
  isAuthenticated : false,
})//state management - Redux

export default authContext;