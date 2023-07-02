import React from "react";

const Categories = ({ filterItems, allCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, i) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={i}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
