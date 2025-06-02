// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartCount = useSelector(state => state.cart.cartItems.length);

  return (
    <header className="header">
      <div className="logo"><img src="./images/image1.png" alt="header_image" height={'30px'} width={'30px'}/> ShoppyGlobe</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
