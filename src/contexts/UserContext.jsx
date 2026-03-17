import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const User = createContext();

export default function UserProvider({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("dbToken") || null,
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || null,
  );
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    userToken
      ? localStorage.setItem("dbToken", userToken)
      : localStorage.removeItem("dbToken");
  }, [userToken]);
  useEffect(() => {
    userData
      ? localStorage.setItem("userData", JSON.stringify(userData))
      : localStorage.removeItem("userData");
  }, [userData]);
  useEffect(() => {
    getAllCategories();
  }, []);
  function getAllCategories() {
    axios
      .get("https://nti-ecommerce.vercel.app/api/v1/categories", {
        headers: {
          token: localStorage.getItem("dbToken"),
        },
      })
      .then((res) => {
        console.log(res);
        setCategoriesData(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <User.Provider
      value={{
        userToken,
        setUserToken,
        setUserData,
        userData,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </User.Provider>
  );
}
