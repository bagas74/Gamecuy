/* file kode Router.js */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RouterDash from "./RouterDash";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Gunakan RouterDash untuk semua rute dashboard */}
        <Route path="/*" element={<RouterDash />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
