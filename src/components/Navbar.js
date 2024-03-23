import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/farmer-registration">Farmer Registration</Link>
        </li>
        <li>
          <Link to="/consumer-registration">Consumer Registration</Link>
        </li>
        <li>
          <Link to="/product-catalog">Product Catalog</Link>
        </li>
        <li>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </li>
        <li>
          <Link to="/order-tracking">Order Tracking</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;