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

  // Categories
  const [categoriesAllData, setCategoriesAllData] = useState([]);
  const [categoriesPage, setCategoriesPage] = useState(1);
  const [categoriesPageData, setCategoriesPageData] = useState([]);

  // Brands
  const [brandsAllData, setBrandsAllData] = useState([]);
  const [brandsPage, setBrandsPage] = useState(1);
  const [brandsPageData, setBrandsPageData] = useState([]);

  // Products
  const [productsAllData, setProductsAllData] = useState([]);
  const [productsPage, setProductsPage] = useState(1);
  const [productsPageData, setProductsPageData] = useState([]);

  // SubCategories
  const [subCategoriesAllData, setSubCategoriesAllData] = useState([]);
  const [subCategoriesPage, setSubCategoriesPage] = useState(1);
  const [subCategoriesPageData, setSubCategoriesPageData] = useState([]);

  return (
    <User.Provider
      value={{
        userToken,
        setUserToken,
        setUserData,
        userData,
        categoriesPage,
        setCategoriesPage,
        categoriesAllData,
        setCategoriesAllData,
        categoriesPageData,
        setCategoriesPageData,
        brandsAllData,
        setBrandsAllData,
        brandsPage,
        setBrandsPage,
        brandsPageData,
        setBrandsPageData,
        productsAllData,
        setProductsAllData,
        productsPage,
        setProductsPage,
        productsPageData,
        setProductsPageData,
        subCategoriesAllData,
        setSubCategoriesAllData,
        subCategoriesPage,
        setSubCategoriesPage,
        subCategoriesPageData,
        setSubCategoriesPageData,
      }}
    >
      {children}
    </User.Provider>
  );
}
