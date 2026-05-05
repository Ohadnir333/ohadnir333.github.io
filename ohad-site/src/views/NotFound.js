import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Jura, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        style={{
          color: 'white',
          border: '1px solid white',
          padding: '0.6rem 1.2rem',
          textDecoration: 'none',
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
