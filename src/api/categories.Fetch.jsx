import axios from "axios";
import toast from "react-hot-toast";
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
        if (!err.response) {
          // Network error - no internet connection
          toast.error("Network error! Please check your internet connection.");
        } else if (err.response?.status >= 500) {
          // Server error (500+)
          toast.error("Server error! Please try again later.");
        } else {
          // Other errors (400, 401, 403, 404, etc.)
          toast.error(
            "Error: " + (err.response?.data?.message || "Something went wrong"),
          );
        }
        flag = false;
      });
  }

  setCategoriesAllData(allCategories);
}
