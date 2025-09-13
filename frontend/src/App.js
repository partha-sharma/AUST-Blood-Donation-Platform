import React from 'react';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register for AUST Blood Donor Platform</h1>
        <p>Sign up with your @aust.edu email and upload your student/teacher ID for verification</p>
      </header>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;