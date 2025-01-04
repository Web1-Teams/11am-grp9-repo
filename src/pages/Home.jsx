import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import SuggestedBooks from "../components/SuggestedBooks";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((book) => ({
          id: book.key,
          title: book.title,
          author: book.author_name?.join(", ") || "Unknown Author",
          coverPhoto: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/128x192?text=No+Cover",
        }));

        setBooks(newBooks);
        setResultTitle(
          newBooks.length ? "Your Search Results:" : "No Results Found!"
        );
      } else {
        setBooks([]);
        setResultTitle("No Results Found!");
      }
    } catch (error) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetchBooks(searchQuery);
  }, [searchQuery]);

  const loaderContainer = {
    width: "48px",
    height: "48px",
    display: "inline-block",
    position: "relative",
  };

  const rotateAnimation = `
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  const loaderStyle = {
    width: "48px",
    height: "48px",
    border: "6px solid transparent",
    borderTop: "6px solid #de3500", 
    borderBottom: "6px solid #089da1", 
    borderRadius: "50%",
    animation: "rotate 1s linear infinite",
  };

  return (
    <div>
          <Welcome />
      <style>{rotateAnimation}</style>
      <Search onSearchChange={handleSearchChange} />
      {loading && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={loaderContainer}>
            <div style={loaderStyle}></div>
          </div>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3 style={{ paddingLeft: "108px", marginTop: "20px" }}>{resultTitle}</h3>
      <SuggestedBooks suggestedBooks={books} />
    </div>
  );
};

export default Home;
