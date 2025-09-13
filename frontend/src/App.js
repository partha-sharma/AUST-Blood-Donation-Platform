
// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// all  components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import DashboardPage from './pages/DashboardPage';
import Register from './components/Register';
import Newsfeed from './components/Newsfeed';

function App() {

return (
    <Router>
      {/* Navbar is placed outside of Routes to be visible on every page */}
      <Navbar /> 
      
      <main>
        <Routes>
          {/* Your new Home component is the default page */}
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/about" element={<About />} /> 
          <Route path="/newsfeed" element={<Newsfeed />} />
              <Route path="/dashboard" element={<DashboardPage />} />
       
        </Routes>
      </main>
    </Router>
  );
};

export default App;