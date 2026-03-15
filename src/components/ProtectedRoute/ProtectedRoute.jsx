import React, { useContext } from "react";
import { User } from "../../contexts/UserContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const navigate = useNavigate();
  const { userToken, setUserToken } = useContext(User);
  if (userToken) {
    console.log("enter");

    return props.children;
  } else {
    console.log("out");
    navigate("/login");
    // return <Navigate to={"/login"}></Navigate>;
  }
}
