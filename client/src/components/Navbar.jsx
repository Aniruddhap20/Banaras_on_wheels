import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About Us</Link>
      <Link to="/packages" style={{ margin: '0 10px' }}>Packages</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact Us</Link>
      <Link to="/tour" style={{ margin: '0 10px' }}>Tour Details</Link>
    </nav>
  );
};

export default Navbar;
