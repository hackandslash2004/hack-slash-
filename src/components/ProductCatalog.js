import React, { useState, useEffect } from 'react';
import './ProductCatalog.css';
import ShoppingCart from './ShoppingCart'; // Import ShoppingCart component

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      {selectedProduct ? (
        <div className="product-gallery">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Farmer: {selectedProduct.farmer.name} ({selectedProduct.farmer.farmName})</p>
          <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
        </div>
      ) : (
        <ul className="product-grid">
          {products.map((product) => (
            <li
              key={product._id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="cart">
          <h3>Cart</h3>
          <ShoppingCart cartItems={cart} removeFromCart={handleRemoveFromCart} />
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
