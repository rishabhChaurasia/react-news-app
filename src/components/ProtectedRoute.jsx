import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { authUser } = useSelector((state) => state.auth);

  return authUser ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
