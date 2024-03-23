import React, { useState } from 'react';
import './ConsumerRegistration.css';

function ConsumerRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email address
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Handle form submission, e.g., send data to the backend
    console.log(formData);
  };

  return (
    <div>
      <h2>Consumer Registration</h2>
      <form onSubmit={handleSubmit} className="consumer-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="consumer-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="consumer-input"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
          className="consumer-input"
        />
        <button type="submit" className="consumer-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default ConsumerRegistration;