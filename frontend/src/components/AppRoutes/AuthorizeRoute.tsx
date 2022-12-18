import { Navigate } from "react-router-dom";
import { AuthorizeRouteProps } from "./types";

export const AuthorizeRoute = (props: AuthorizeRouteProps) => {
  const { allowed, children } = props;

  if (!allowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
