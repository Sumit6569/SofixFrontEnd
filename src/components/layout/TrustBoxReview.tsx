import React from 'react';

const TrustBoxReview = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'transparent',
      borderRadius: '16px',
      padding: '20px',
      maxWidth: '240px',
      textAlign: 'center',
    }}>
      {/* Title: Sofixs */}
      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#00b67a', marginBottom: '10px' }}>
        Sofixs
      </div>

      {/* 5 Full Stars */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffc107" viewBox="0 0 24 24" style={{ margin: '0 2px' }}>
            <path d="M12 .587l3.668 7.429 8.2 1.191-5.934 5.781 1.402 8.18L12 18.897l-7.336 3.861 1.402-8.18L.132 9.207l8.2-1.191z" />
          </svg>
        ))}
      </div>

      {/* Subtitle */}
      <div style={{ fontSize: '14px', color: 'gray', fontWeight: 'bold', marginBottom: '16px' }}>
      ⭐ Sofixs is rated among the best by our happy clients!
      </div>

      {/* Button */}
      <a
        href="https://www.trustpilot.com/review/sofixs.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#00b67a',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '30px',
          fontSize: '14px',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        Leave a Review
      </a>
    </div>
  );
};

export default TrustBoxReview;
