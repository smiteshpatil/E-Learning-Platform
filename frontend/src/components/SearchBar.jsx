import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Searchbar.css";
const SearchBar = () => {
  const { allCourses } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = (query) => {
    const result = allCourses.map((each) => each.courseDTO);

    const searchResult = result.filter((item) =>
      item.courseName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(searchResult);
  };

  // Function to clear search results when the search bar is empty
  const clearSearchResults = () => {
    if (searchQuery === "") {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="searchBarStyle">
        <input
          className="form-control inputStyle"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
          onBlur={clearSearchResults}
        />
      </div>
      {searchQuery !== "" && ( // Only show search results if searchQuery is not empty
        <div
          className={`searchResultStyle search-content ${
            searchResults.length > 0 ? "show" : ""
          }`}
        >
          {searchResults.map((currCourse, index) => (
            <Link
              to={`/courses/${currCourse.id}`}
              key={index}
              onClick={clearSearchResults}
            >
              {currCourse.courseName}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
