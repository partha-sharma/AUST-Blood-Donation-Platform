const express = require('express');
const mongoose = require('mongoose'); // mongodb connect
const cors = require('cors');
//
const dotenv = require('dotenv');




dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes'); //added this for the route for blood request.
const adminRoutes = require('./routes/adminRoutes');

app.get('/', (req, res) => {
  res.json({ message: 'AUST Blood Donor API is running!' });
});

app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes); // this is for the api call of blood request.
app.use('/api/admin', adminRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});