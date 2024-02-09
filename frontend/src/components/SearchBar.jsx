import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const searchBarStyle = {
    display: "flex",
    alignItems: "center",
    maxWidth: "800px",
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

  const searchResultStyle = {
    position: "absolute",
    top: "9%",
    left: "22.5%",
    width: "52%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9999",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const staticData = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes",
  ];

  // Function to handle search
  const handleSearch = (query) => {
    const result = staticData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(result);
  };

  // Function to clear search results when the search bar is empty
  const clearSearchResults = () => {
    if (searchQuery === "") {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search for courses..."
          style={inputStyle}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
          onBlur={clearSearchResults}
        />
      </div>
      {searchQuery !== "" && ( // Only show search results if searchQuery is not empty
        <div className="search-content" style={searchResultStyle}>
          {searchResults.map((result, index) => (
            <Link key={index}>{result}</Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
