import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { customerFetch } from "../../api/customer.Fetch";
import { User } from "../../contexts/UserContext";

export default function Pagination(props) {
  const {
    categoriesAllData,
    categoriesPage,
    subCategoriesAllData,
    subCategoriesPage,
    productsAllData,
    productsPage,
    brandsAllData,
    brandsPage,
  } = useContext(User);
  let customerFlag = {
    setCategoriesAllData: categoriesAllData,
    setBrandsAllData: brandsAllData,
    setProductsAllData: productsAllData,
    setSubCategoriesAllData: subCategoriesAllData,
  };
  let customerPage = {
    setCategoriesAllData: categoriesPage,
    setBrandsAllData: brandsPage,
    setProductsAllData: productsPage,
    setSubCategoriesAllData: subCategoriesPage,
  };
  useEffect(() => {
    customerFetch(props.setCustomerAllData, props.setCustomerAllDataFlag); // 2 pro
  }, [props.setCustomerAllData]);

  function changePage(numberPage) {
    customerFetch(props.setCustomerAllData, props.setCustomerAllDataFlag);
    props.setCustomerPageData(
      customerFlag[props.setCustomerAllDataFlag][numberPage - 1],
    );
    props.setCustomerPage(numberPage);
  }

  function goBack() {
    if (customerPage[props.setCustomerAllDataFlag] != 1) {
      customerFetch(props.setCustomerAllData, props.setCustomerAllDataFlag);
      props.setCustomerPageData(
        customerFlag[props.setCustomerAllDataFlag][
          customerPage[props.setCustomerAllDataFlag] - 2
        ],
      );
      props.setCustomerPage(customerPage[props.setCustomerAllDataFlag] - 1);
    }
  }

  function goNext() {
    if (
      // customerPage[props.setCustomerAllDataFlag] != categoriesAllData.length
      customerPage[props.setCustomerAllDataFlag] !=
      customerFlag[props.setCustomerAllDataFlag].length
    ) {
      customerFetch(props.setCustomerAllData, props.setCustomerAllDataFlag);
      props.setCustomerPageData(
        customerFlag[props.setCustomerAllDataFlag][
          customerPage[props.setCustomerAllDataFlag]
        ],
      );
      props.setCustomerPage(customerPage[props.setCustomerAllDataFlag] + 1);
    }
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex -space-x-px text-sm">
          {customerPage[props.setCustomerAllDataFlag] > 1 && (
            <li>
              <NavLink
                onClick={() => {
                  goBack();
                }}
                className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-10 h-10 focus:outline-none"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-4 h-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </NavLink>
            </li>
          )}

          {customerFlag[props.setCustomerAllDataFlag].map((page, index) => {
            const pageNumber = index + 1;
            const isActive =
              pageNumber == customerPage[props.setCustomerAllDataFlag];
            return (
              <li key={index}>
                <NavLink
                  onClick={() => {
                    changePage(pageNumber);
                  }}
                  className={`flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none ${
                    isActive
                      ? "text-fg-brand bg-neutral-tertiary-medium hover:text-fg-brand"
                      : ""
                  }`}
                >
                  {pageNumber}
                </NavLink>
              </li>
            );
          })}

          {customerPage[props.setCustomerAllDataFlag] !=
            customerFlag[props.setCustomerAllDataFlag].length && (
            <li>
              <NavLink
                onClick={() => {
                  goNext();
                }}
                className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-4 h-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
