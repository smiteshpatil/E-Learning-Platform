import React, { useState } from "react";
import "./CategoryList.css";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = [
    { name: "Development" },
    { name: "Finance & Accounting" },
    { name: "Business" },
    { name: "Digital Marketing" },
    { name: "Graphics Design" },
    { name: "Entrepreneurship" },
    { name: "All Categories" },
  ];

  return (
    <React.Fragment>
      <ul className={`category-list`}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={`/allCourses/${index}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default CategoryList;
