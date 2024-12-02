import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./pages/dashboard/Sidebar";
import TopNavbar from "./pages/dashboard/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Library from "./pages/Library";
import ReedemGame from "./pages/ReedemGame";
import Dashboard from "./pages/dashboard/Dashboard";

function RouterDash() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`content-container ${
          isSidebarOpen ? "expanded" : "collapsed"
        }`}
      >
        <TopNavbar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/ReedemGame" element={<ReedemGame />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default RouterDash;
