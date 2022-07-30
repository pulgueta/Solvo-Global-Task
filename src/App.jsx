import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./routes";

import { Topbar } from "./ui/components";
import { Login, Weather, Favorites } from "./views";

export const App = () => {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Weather />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
