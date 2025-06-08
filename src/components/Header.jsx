
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartCount = useSelector(state => state.cart.cartItems.length);
  const location = useLocation();

  const is404Page =
    !['/', '/cart'].some(path => location.pathname === path) &&
    !location.pathname.startsWith('/product/');

  return (
    <header className="header">
      <div className="logo">
        <img
          src="./images/image1.png"
          alt="header_image"
          height="30px"
          width="30px"
        />
        ShoppyGlobe
      </div>

      <nav>
        {is404Page ? (
          <Link to="/" className="back-home-btn">
            ⬅ Back to Home
          </Link>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/cart">🛒 Cart({cartCount})</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

