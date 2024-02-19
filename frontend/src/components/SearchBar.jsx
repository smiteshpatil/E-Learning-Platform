import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/Searchbar.css";
const SearchBar = () => {
  const { allCourses } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchContainerRef = useRef(null);

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

  // Function to handle click outside the search result container
  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="searchBarStyle">
        <input
          id="searchInput"
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
          ref={searchContainerRef}
        >
          {searchResults.map((currCourse, index) => (
            <Link to={`/courses/${currCourse.id}`} key={index}>
              {currCourse.courseName}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
