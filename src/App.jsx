import { Routes, Route } from "react-router-dom";

import { Topbar } from "./ui/components";
import { Login } from "./views";

export const App = () => {
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};
