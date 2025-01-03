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
    
    <div style={{ marginTop: "20px",marginBottom: "20px", textAlign: "center" }}>
      <div 
        className="input-group" 
        style={{
          maxWidth: "600px",
          margin: "0 auto", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}
      >
        <input 
          type="search"
          id="search-bar"
          placeholder="Enter book title..."
          className="form-control"
          style={{ height: "40px", flex: "1" }}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary"
          style={{ height: "40px", marginLeft: "5px",backgroundColor: "#089da1",
          }}
          onClick={handleSearch}

        >
          Search
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Search;
