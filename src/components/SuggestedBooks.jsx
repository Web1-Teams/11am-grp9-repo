import React from "react";

const SuggestedBooks = ({ suggestedBooks }) => {
  return (
    <div className="container">
      <div className="row mt-4">
        {suggestedBooks.map((book) => (
          <div key={book.id} className="col-md-3 mb-3">
            <div
              className="card"
              style={{
                height: "100%", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={book.coverPhoto}
                alt={book.title}
                style={{
                  width: "100%", 
                  height: "200px", 
                  objectFit: "contain", 
                  objectPosition: "center", 
                  backgroundColor: "white", 
                }}
              />
              <div
                className="card-body"
                style={{
                  textAlign: "center", 
                  flexGrow: 1,
                }}
              >
                <h5
                  className="card-title"
                  style={{ marginBottom: "10px", fontWeight: "bold" }}
                >
                  {book.title}
                </h5>
                <p
                  className="card-text"
                  style={{ margin: "0", color: "gray", fontSize: "14px" }}
                >
                  Author: {book.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedBooks;
