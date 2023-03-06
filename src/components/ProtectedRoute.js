import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
