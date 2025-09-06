
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import the component you just created
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            {/* This line tells the app: when the URL is "/register", show the Register component */}
            <Route path="/register" element={<Register />} />
            
            {/* You can add a temporary Home route as well */}
            <Route path="/" element={<h1>Welcome to the AUST Blood Donor Platform</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;