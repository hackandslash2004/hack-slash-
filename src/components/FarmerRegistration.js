import React, { useState } from 'react';
import './FarmerRegistration.css'; // Import the CSS file

function FarmerRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    location: '',
    products: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/farmers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }); 
  
      if (response.ok) {
        console.log('Farmer registered successfully');
        // Reset the form data or perform any other actions
      } else {
        console.error('Failed to register farmer');
      }
    } catch (err) {
      console.error('Error registering farmer:', err);
    }
  };

  return (
    <div>
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit} className="farmer-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="farmer-input"
        />
        <input
          type="text"
          name="farmName"
          placeholder="Farm Name"
          value={formData.farmName}
          onChange={handleChange}
          className="farmer-input"
        />
        <input
          type="text"
          name="location"
          placeholder="Farm Location"
          value={formData.location}
          onChange={handleChange}
          className="farmer-input"
        />
        {/* Add fields for products and other farm details */}
        <button type="submit" className="farmer-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default FarmerRegistration;