import React from 'react';

function ShoppingCart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item._id}>
            <div>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <span>{item.name}</span>
                <span>Price: ${item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button>Proceed to Checkout</button>
    </>
  );
}

export default ShoppingCart;
