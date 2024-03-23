import React, { useState, useEffect } from 'react';

function OrderTracking() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    const fetchOrders = async () => {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Tracking</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Delivery Date: {order.deliveryDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderTracking;