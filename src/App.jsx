import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes";

import { Topbar } from "./ui/components";
import { Login, Weather } from "./views";

export const App = () => {
  return (
    <>
      <Topbar />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Weather />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
