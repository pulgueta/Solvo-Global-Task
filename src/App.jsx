import { Routes, Route } from "react-router-dom";

import { Topbar } from "./ui/components";
import { Login, Weather } from "./views";

export const App = () => {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
