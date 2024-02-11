import React from "react";
import "./CategoryList.css";

function CategoryList() {
  const categories = [
    {
      name: "Development",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "Finance & Accounting",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "Business",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "Digital Marketing",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "Graphics Design",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "Entrepreneurship",
      subcategories: ["Subcategory", "Subcategory", "Subcategory"],
    },
    {
      name: "All Categories",
      subcategories: [], //["Subcategory", "Subcategory", "Subcategory"],
    },
  ];

  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <li key={index}>
          <span>{category.name}</span>
          <ul className="subcategory-list">
            {category.subcategories.map((subcategory, subIndex) => (
              <li key={subIndex}>{subcategory}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
