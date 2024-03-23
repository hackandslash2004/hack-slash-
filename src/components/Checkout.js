import React, { useState } from 'react';

function Checkout() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment and order submission
    console.log(paymentInfo);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={paymentInfo.expiryDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handleChange}
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;