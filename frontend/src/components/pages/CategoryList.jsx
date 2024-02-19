import React, { useState } from "react";
import "./CategoryList.css";
import { Link } from "react-router-dom";

function CategoryList() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const categories = [
    { name: "Development", link: "dev" },
    { name: "Finance & Accounting", link: "financeAndAcc" },
    { name: "Business", link: "business" },
    { name: "Digital Marketing", link: "digitalMarketing" },
    { name: "Graphics Design", link: "graphicsDesign" },
    { name: "Entrepreneurship", link: "entrepreneurship" },
    { name: "All Categories", link: "" },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <React.Fragment>
      <ul className={`category-list ${dropdownVisible ? "hidden" : ""}`}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={`/product/${category.link}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CategoryList;
