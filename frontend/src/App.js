// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Newsfeed from './components/Newsfeed';
import Dashboard from './components/Dashboard'; // For logged-in users
import AdminPanel from './components/AdminPanel'; // For admin users

// Import Route Wrappers
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <Router>
      <Navbar /> 
      <main>
        <Routes>
          {/* --- PUBLIC ROUTES --- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/newsfeed" element={<Newsfeed />} />

          {/* --- PROTECTED USER ROUTES --- */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add any other user-only pages here, like "/profile" */}
          </Route>

          {/* --- PROTECTED ADMIN ROUTES --- */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
            {/* Add any other admin-only pages here */}
          </Route>
          
        </Routes>
      </main>
    </Router>
  );
}

export default App;