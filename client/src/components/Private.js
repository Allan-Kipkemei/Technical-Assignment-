// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

function Private({ element, ...rest }) {
  // Implement a basic authentication check here
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // You can change this based on your authentication logic

  return isAuthenticated === "true" ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Private;
