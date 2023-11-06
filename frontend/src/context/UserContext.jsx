import { createContext, useReducer } from "react";

export const UsersContext = createContext();
export const usersReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        users: [action.payload, ...state.users],
      };
    case "LOGIN_USER":
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, {
    users: null,
  });

  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
