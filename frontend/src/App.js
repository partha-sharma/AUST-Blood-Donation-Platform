import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import DashboardPage from './pages/DashboardPage';
import RequestBloodPage from './pages/RequestBloodPage'; // Make sure this line exists

function App() {
  return (
    <Router>
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* This next line is what makes the page load correctly */}
          <Route path="/request-blood" element={<RequestBloodPage />} />
          {/* Other Routes */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;