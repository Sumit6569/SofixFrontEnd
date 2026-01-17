import React from 'react';

const partners = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adobe_Corporate_wordmark.svg/1920px-Adobe_Corporate_wordmark.svg.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Mitkart', logo: 'https://mitkart.com/Mitkart.jpeg' },
  { name: 'ME Ride', logo: '/2.jpeg' },
  { name: 'Sajilo Safar', logo: '/sajilosafar.png' },
];

const scrollAnimation = {
  display: 'inline-flex',
  width: 'max-content',
  animation: 'scrollLeft 30s linear infinite',
};

const keyframes = `
@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const PartnersSection = () => {
  return (
    <section style={{ backgroundColor: 'white', padding: '4rem 1rem', textAlign: 'center' }}>
      
      {/* Inject keyframes in head */}
      <style>{keyframes}</style>

      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Partners & Clients</h2>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '3rem' }}>
        We collaborate with leading companies and organizations worldwide to deliver exceptional solutions.
      </p>

      {/* Scrollable Logos */}
      <div style={{ overflow: 'hidden', position: 'relative', padding: '1rem 0' }}>
        <div style={scrollAnimation}>
          {partners.concat(partners).map((partner, index) => (
            <div key={index} style={{ display: 'inline-block', margin: '0 2rem' }}>
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  height: '64px',
                  width: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%)'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ marginTop: '4rem', backgroundColor: '#f5f5f5', borderRadius: '1rem', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Join Our Growing List of Global Partners?
          </h3>
          <p style={{ color: '#777', marginBottom: '2rem' }}>
            Partner with Sofixs to leverage our technical expertise and global reach for mutual growth and success.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#005bb5'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0070f3'}
          >
            Become a Partner
          </a>
        </div>
      </div>

    </section>
  );
};

export default PartnersSection;
