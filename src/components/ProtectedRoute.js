import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const userRole = localStorage.getItem("role");

  // Jika role tidak sesuai atau belum login
  if (!userRole || userRole !== requiredRole) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
