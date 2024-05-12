import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import { EspaceAdmin } from "./components/EspaceAdmin";
import { EspaceFormateur } from "./components/espaceFormateur";
import Create from "./components/Create";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/espace-admin" element={<EspaceAdmin />} />
        <Route path="/espace-formateur" element={<EspaceFormateur />} />
        <Route path="/manage-users" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
