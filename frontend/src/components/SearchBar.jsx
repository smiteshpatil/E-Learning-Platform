import React from "react";

const SearchBar = () => {
  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    maxWidth: "800PX",
    margin: "0 auto",
    borderRadius: "25px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginRight: "10px",
    fontSize: "16px",
    outline: "none",
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search for courses..."
        style={inputStyle}
      />
    </div>
  );
};

export default SearchBar;
