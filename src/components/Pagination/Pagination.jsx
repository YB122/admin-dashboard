import React from "react";
import { Link } from "react-router-dom";
import { categoriesFetch } from "../../api/categories.Fetch";

export default function Pagination(props) {
  console.log(props, "line 5");
  let categories = categoriesFetch();
  console.log(categories.length, "line 8");

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="flex -space-x-px text-sm">
          <li>
            <Link
              to="#"
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
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none"
            >
              1
            </Link>
          </li>

          <li>
            <Link
              to="#"
              aria-current="page"
              className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none"
            >
              3
            </Link>
          </li>

          <li>
            <Link
              to="#"
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
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
