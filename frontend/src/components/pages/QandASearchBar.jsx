import React, { useState } from "react";

const SearchBar = () => {
  const dummyQuestions = [
    "How to create a React functional component?",
    "What is the difference between props and state in React?",
    "How to handle forms in React?",
    "What are React hooks?",
    "How to fetch data in React?",
    "How to style components in React?",
    "What is React Router?",
    "How to deploy a React app?",
    "What is Redux and how to use it in React?",
    "How to optimize performance in React?",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter dummy questions based on search query
    const filteredResults = dummyQuestions.filter((question) =>
      question.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);

    // Show or hide results based on query
    setShowResults(query !== "");
  };

  const handleBlur = () => {
    // Hide results when search bar loses focus
    setShowResults(false);
  };

  return (
    <div>
      <input
        type="text"
        style={{
          width: "100%",
          border: "2px solid",
          borderColor: "#ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
        placeholder="Search relevant questions"
        value={searchQuery}
        onChange={handleSearch}
        onBlur={handleBlur}
        onFocus={() => setShowResults(searchResults.length > 0)}
      />
      {showResults && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
            padding: "5px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index}>
                <a
                  href={`course/question/${result}`}
                  style={{ display: "block" }}
                >
                  {result}
                </a>
              </div>
            ))
          ) : (
            <div>Nothing matched your query. Please publish your question.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
