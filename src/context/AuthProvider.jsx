import { useReducer } from "react";

import { AuthContext } from "./";

import { authReducer } from "../reducer";
import { types } from "../types";

const initialState = {
  logged: false,
};

const trigger = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, trigger);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        logged: true,
        name,
      },
    };

    localStorage.setItem("user", JSON.stringify(action.payload.name));
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, login }}>
      {children}
    </AuthContext.Provider>
  );
};
