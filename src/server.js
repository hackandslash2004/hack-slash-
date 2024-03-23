const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(cors())
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farm-registry', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define the farmer schema
const farmerSchema = new mongoose.Schema({
  name: String,
  farmName: String,
  location: String,
  products: [String],
});

// Create the Farmer model
const Farmer = mongoose.model('Farmer', farmerSchema);

// API endpoint to register a farmer
app.post('/api/farmers', async (req, res) => {
  try {
    const { name, farmName, location, products } = req.body;
    const farmer = new Farmer({ name, farmName, location, products });
    console.log(req.body)
    await farmer.save();
    res.status(201).json(farmer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});