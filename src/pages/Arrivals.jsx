import React, { useState } from 'react';

const Arrivals = () => {
  const [selectedBook, setSelectedBook] = useState(null); // حالة لتحديد الكتاب
  const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح وإغلاق الـ Modal
  const [searchText, setSearchText] = useState(''); // حالة لنص البحث

  const arrivalsData = [
    { image: '/images/p1.jpg', title: 'New Arrivals: PERCY JACKSON AND THE LIGHTNING THIEF', description: 'Description for Book 1' },
    { image: '/images/p2.jpg', title: 'New Arrivals: THE GIVER LOIS LOWRY', description: 'Description for Book 2' },
    { image: '/images/p3.jpg', title: 'New Arrivals: THE WRIGHT BROTHERS', description: 'Description for Book 3' },
    { image: '/images/p4.jpg', title: 'New Arrivals: RADICAL GARDENING', description: 'Description for Book 4' },
    { image: '/images/p5.jpg', title: 'New Arrivals: RED QUEEN', description: 'Description for Book 5' },
    { image: '/images/p6.jpg', title: 'New Arrivals: HARPER LEE TO KILL A MOCKINGBIRD', description: 'Description for Book 6' },
    { image: '/images/p7.jpg', title: 'New Arrivals: Harry Potter AND THE PHILOSOPHER S STONE', description: 'Description for Book 7' },
    { image: '/images/p8.jpg', title: 'New Arrivals: HEROES OF OLYMPUS THE LOST HERO', description: 'Description for Book 8' },
    { image: '/images/p9.jpg', title: 'New Arrivals: DIARY of a Wimpy Kid SQUID GAME', description: 'Description for Book 9' },
    { image: '/images/p10.jpg', title: 'New Arrivals: RANGER S APPRENTICE', description: 'Description for Book 10' },
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="arrivals" style={{ width: '100%', height: '100vh', marginBottom: '35px' }}>
      <h1 style={{ fontSize: '50px', textAlign: 'center', marginBottom: '35px' }}>New Arrivals</h1>

      {/* Search Box */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: '450px',
              height: '50px',
              padding: '10px 20px',
              borderRadius: '25px 0 0 25px',
              border: '2px solid #d4e2d4',
              background: 'linear-gradient(135deg, #f3f9f3, #e0f7f0)',
              fontSize: '16px',
              color: '#333',
              outline: 'none',
              transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
              e.target.style.borderColor = '#4caf93';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
              e.target.style.borderColor = '#d4e2d4';
            }}
          />
          <button
            style={{
              height: '50px',
              padding: '10px 30px',
              borderRadius: '0 25px 25px 0',
              border: 'none',
              background: 'linear-gradient(135deg, #4caf93, #3b8567)',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #3b8567, #4caf93)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #4caf93, #3b8567)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="arrivals_box" style={{ width: '95%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '25px' }}>
        {arrivalsData
          .filter((arrival) => arrival.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((arrival, index) => (
            <div className="arrivals_card" key={index} style={{ width: '300px', height: '400px', textAlign: 'center', padding: '5px', border: '1px solid #919191', margin: 'auto' }}>
              <div className="arrivals_image" style={{ width: '180px', height: '260px', margin: '0 auto', cursor: 'pointer', boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)', overflow: 'hidden' }}>
                <img src={arrival.image} alt={arrival.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: '0.3s' }} />
              </div>
              <div className="arrivals_tag" style={{ fontFamily: 'queen of camelot', fontSize: '20px', margin: '8px 0' }}>
                <p style={{ margin: 0 }}>{arrival.title}</p>
                <a
                  href="#"
                  className="arrivals_btn"
                  style={{ padding: '8px 20px', border: '2px solid #089da1', textDecoration: 'none', color: '#000' }}
                  onClick={() => openModal(arrival)}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '400px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <h2>{selectedBook.title}</h2>
            <p>{selectedBook.description}</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                border: 'none',
                backgroundColor: '#089da1',
                color: '#fff',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arrivals;