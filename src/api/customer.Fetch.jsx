import axios from "axios";
let allApi = {
  setCategoriesAllData: "https://nti-ecommerce.vercel.app/api/v1/categories",
  setBrandsAllData: "https://nti-ecommerce.vercel.app/api/v1/brands",
  setProductsAllData: "https://nti-ecommerce.vercel.app/api/v1/products",
  setSubCategoriesAllData:
    "https://nti-ecommerce.vercel.app/api/v1/subCategories",
};
let specificData = {
  setCategoriesAllData: "categories",
  setBrandsAllData: "brands",
  setProductsAllData: "Products",
  setSubCategoriesAllData: "categories",
};
export async function customerFetch(setCustomerAllData, customerFlag) {
  let allCustomerData = [];
  let page = 1;

  let flag = true;

  while (flag) {
    await axios
      .get(`${allApi[customerFlag]}?page=${page}`, {
        headers: {
          token: localStorage.getItem("dbToken"),
        },
      })
      .then((res) => {
        let key = res.data[specificData[customerFlag]];

        if (key.length <= 4 && key.length > 0) {
          flag = false;
          allCustomerData.push(key);
        } else if (key.length == 0) {
          flag = false;
        } else {
          allCustomerData.push(key);
          page++;
        }
      })
      .catch((err) => {
        flag = false;
      });
  }

  setCustomerAllData(allCustomerData);
}
