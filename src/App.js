import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Checkout from './components/Checkout';
import ConsumerRegistration from './components/ConsumerRegistration';
import FarmerRegistration from './components/FarmerRegistration';
import LandingPage from './components/LandingPage';
import OrderTracking from './components/OrderTracking';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';

function App() {
 

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/farmer-registration" element={<FarmerRegistration />} />
            <Route path="/consumer-registration" element={<ConsumerRegistration />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Routes>
        </div>
        <footer className="App-footer">
          From Farm to Table 2024 &reg;
        </footer>
      </div>
    </Router>
  );
}

const Header = () => {
  return (
    <header className="header">
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
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/order-tracking">Order Tracking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default App;