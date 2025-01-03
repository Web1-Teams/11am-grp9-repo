import React, { useState } from "react";

const Search = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearchChange(searchQuery);
    }
  };

  return (
    <div style={{ marginTop: "400px", textAlign: "center" }}>
      <div className="input-group" style={{ maxWidth: "600px", margin: "auto" }}>
        <input
          type="search"
          id="search-bar"
          placeholder="Enter book title..."
          className="form-control"
          style={{ height: "40px" }}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary"
          style={{ height: "40px", marginLeft: "5px" }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
