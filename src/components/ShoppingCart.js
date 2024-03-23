import React from 'react';

function ShoppingCart() {
  const cartItems = [
    { id: 1, name: 'Apples', price: 2.99, quantity: 2 },
    { id: 2, name: 'Carrots', price: 1.49, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default ShoppingCart;