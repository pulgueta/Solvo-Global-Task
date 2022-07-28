import { useReducer } from "react";

import { AuthContext } from "./";

import { authReducer } from "../../reducer";
import { types } from "../../types";

const trigger = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, trigger);

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

  const logout = () => {
    const action = {
      type: types.logout,
    };

    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
