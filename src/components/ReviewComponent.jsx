import React from 'react';

const ReviewComponent = () => {
  const reviewsStyle = {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    marginTop: '50px',
  };

  const reviewBoxStyle = {
    width: '95%',
    margin: '15px auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const reviewCardStyle = {
    width: '300px',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    margin: '10px',
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const cardTopStyle = {
    textAlign: 'center',
    marginBottom: '15px',
  };

  const cardImageStyle = {
    width: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
    height: '100px',
    objectFit: 'cover',
  };

  const quoteStyle = {
    fontSize: '50px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#eaeaea',
  };

  const reviewIconStyle = {
    fontSize: '18px',
    marginTop: '15px',
    color: '#ffc107',
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
  };

  return (
    <div style={reviewsStyle}>
      <h1>Reviews</h1>
      <div style={reviewBoxStyle}>
        {/* Existing Review Cards */}
        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-1.jpg"
              alt="Abdullah Ali"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Abdullah Al-Shammari</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "An absolutely amazing experience! Excellent book quality and
              great service. I will recommend this store to everyone!"
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>

        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-2.jpg"
              alt="Michael Brown"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Michael Brown</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "A diverse collection of books covering all interests. I loved
              the fast delivery and accurate descriptions."
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>

        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-3.jpg"
              alt="David Jones"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>David Jones</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "A perfect place for book lovers! Thank you for this level of
              professionalism and excellent selections."
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>

        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
          <img
          src="/Images/Reviews pic-4.jpg"
           alt="Emma Smith"
          style={cardImageStyle}
           />

          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Emma Smith</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "The customer service is fantastic, and the books arrive in
              perfect condition. I will definitely shop here again!"
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>

        {/* New Review Cards */}
        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-5.jpg"
              alt="Sarah Connor"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Sarah Connor</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "Amazing collection of rare books! The team was very helpful in
              guiding me to what I needed."
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-6.jpg"
              alt="Liam Wilson"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Liam Wilson</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "Great prices and fast shipping. I’ll definitely be back for more
              books soon!"
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>

        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-7.jpg"
              alt="Sophia Adams"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Sophia Adams</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "The variety of genres available is fantastic. I found exactly
              what I needed."
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div style={reviewCardStyle}>
          <i className="fa-solid fa-quote-right" style={quoteStyle}></i>
          <div style={cardTopStyle}>
            <img
              src="/Images/Reviews pic-8.jpg"
              alt="Oliver Taylor"
              style={cardImageStyle}
            />
          </div>
          <div>
            <h3 style={{ margin: '10px 0' }}>Oliver Taylor</h3>
            <p style={{ fontSize: '14px', color: '#555' }}>
              "I was impressed by how quickly my order arrived. The book quality was excellent!"
            </p>
            <div style={reviewIconStyle}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
