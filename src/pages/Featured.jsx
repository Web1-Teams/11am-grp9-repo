import React, { useState, useEffect } from 'react';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeaturedBooks();
  }, []);

  const fetchFeaturedBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://openlibrary.org/search.json?q=classic');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        const newBooks = data.docs.map((book) => ({
          id: book.key,
          title: book.title,
          author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
          coverPhoto: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/128x192?text=No+Cover",
        }));
        setBooks(newBooks);
      } else {
        setError("No results found.");
      }
    } catch (error) {
      setError(error.message || "Failed to fetch books.");
    }
    setLoading(false);
  };

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '6px solid #ddd',
    borderTop: '6px solid #3498db', // لون أزرق مناسب
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const spinKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div>
      <style>{spinKeyframes}</style>
      {loading ? (
        <div style={loaderStyle}>
          <div style={spinnerStyle}></div>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>Featured Books</h1>
          {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
            {books.map(book => (
              <div key={book.id} style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#fff', borderRadius: '8px' }}>
                <img src={book.coverPhoto} alt={book.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                <h2 style={{ fontSize: '16px', margin: '10px 0', color: '#333' }}>{book.title}</h2>
                <p style={{ color: '#555' }}>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedBooks;
