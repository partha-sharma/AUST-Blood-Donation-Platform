
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Newsfeed from './components/Newsfeed';

function App() {
  return (
    <Router>
      <div className="App">
        {/* This is a temporary nav for testing. Partha pore real ta banabe */}
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <Link to="/newsfeed">Go to Newsfeed</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/newsfeed" element={<Newsfeed />} />
            {/* Add a default welcome message for the home path */}
            <Route path="/" element={<h1>Welcome to the AUST Blood Donor Platform</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;