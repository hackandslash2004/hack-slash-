const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(cors())
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Registry', {
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
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

// Create the Farmer model
const Farmer = mongoose.model('Farmer', farmerSchema);

// Define the consumer schema
const consumerSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
});

// Create the Consumer model
const Consumer = mongoose.model('Consumer', consumerSchema);

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer' },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

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

// API endpoint to register a consumer
app.post('/api/consumers', async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const consumer = new Consumer({ name, email, address });
    await consumer.save();
    res.status(201).json(consumer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// API endpoint to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().populate('farmer', 'name farmName');
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, "localhost", () => {
  console.log(`Server is running on port ${port}`);
});