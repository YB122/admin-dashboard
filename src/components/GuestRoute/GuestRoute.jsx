import React, { useContext } from "react";
import { User } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const navigate = useNavigate();
  const { userToken } = useContext(User);

  if (userToken) {
    navigate("/categories");
  }

  return children;
}
