
const mongoose = require('mongoose'); // mongodb connect
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
app.use(express.json());

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'AUST Blood Donor API is running!' });
});

app.use('/api/users', userRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});