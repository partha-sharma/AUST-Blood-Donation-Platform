
<<<<<<< HEAD
=======
// frontend/src/App.js
>>>>>>> main
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

// Import the component you just created
import Register from './components/Register';

// all  components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Newsfeed from './components/Newsfeed';

function App() {


  return (
    <Router>
<<<<<<< HEAD
      <div className="App">
        <main>
          <Routes>
            {/* This line tells the app: when the URL is "/register", show the Register component */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            {/* You can add a temporary Home route as well */}
            <Route path="/" element={<h1>Welcome to the AUST Blood Donor Platform</h1>} />
=======
      
      <div className="App">
        {/* The Navbar is outside <Routes>, so it will show on every page */}

        <Navbar /> 
        
        <main>
          <Routes>
            {/* Route for the new Home component */}
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Hishams route added for about */}
            <Route path="/about" element={<About />} />
            {/* MAHDI'S ROUTES */}
            <Route path="/" element={<Home />} /> 
            <Route path="/newsfeed" element={<Newsfeed />} />
            
>>>>>>> main
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;