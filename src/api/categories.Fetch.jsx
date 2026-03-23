import axios from "axios";

export async function categoriesFetch(setCategoriesAllData) {
  let allCategories = [];
  let page = 1;

  let flag = true;
  while (flag) {
    await axios
      .get(`https://nti-ecommerce.vercel.app/api/v1/categories?page=${page}`, {
        headers: {
          token: localStorage.getItem("dbToken"),
        },
      })
      .then((res) => {

        if (res.data.categories.length <= 4 && res.data.categories.length > 0) {
          flag = false;
          allCategories.push(res.data.categories);
        } else if (res.data.categories.length == 0) {
          flag = false;
        } else {
          allCategories.push(res.data.categories);
          page++;
        }
      })
      .catch((err) => {
      
        flag = false;
      });
  }

  setCategoriesAllData(allCategories);
}
