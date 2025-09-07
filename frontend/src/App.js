
// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

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
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;