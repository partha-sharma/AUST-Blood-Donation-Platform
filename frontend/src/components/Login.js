// frontend/src/components/Login.js
import React, { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // --- THIS WAS THE MISSING PIECE ---
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // --- END OF FIX ---

  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const data = await login(email, password);

      if (data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred.');
    }
  };
  
  const styles = {
    container: { maxWidth: '400px', margin: '50px auto', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' },
    input: { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
    button: { width: '100%', padding: '12px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
    header: { textAlign: 'center', marginBottom: '10px' },
    p: { textAlign: 'center', color: '#666', marginTop: '-10px', marginBottom: '30px' }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome Back</h2>
      <p style={styles.p}>Login to AUST Blood Donor Platform</p>

      {error && <div style={{padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '15px', textAlign: 'center'}}>{error}</div>}

      <form onSubmit={onSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>AUST Email</label>
          <input style={styles.input} type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input style={styles.input} type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;