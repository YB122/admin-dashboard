import axios from "axios";
import React from "react";

export function categoriesFetch() {
  let allCategories = [];
  let page = 1;
  console.log("jnnbshbs");

  while (page) {
    axios
      .get(`https://nti-ecommerce.vercel.app/api/v1/categories?page=${page}`, {
        headers: {
          token: localStorage.getItem("dbToken"),
        },
      })
      .then((res) => {
        console.log(res);
        allCategories = [...res.data.categories];
        if (res.data.categories.length <= 4) {
          page = false;
        } else {
          page++;
        }
      })
      .catch((err) => {
        console.log(err);
        page = false;
      });
  }
  console.log(allCategories, "line 26");

  return allCategories;
}
