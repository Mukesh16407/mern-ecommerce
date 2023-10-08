import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  return user && user.token ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default ProtectedRoute;
