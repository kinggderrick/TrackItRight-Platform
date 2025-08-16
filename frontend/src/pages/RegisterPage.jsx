import { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { API_BASE_URL } from "../config"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/users/register`, formData);
      setMessage('Registration successful!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Error registering user');
    }
  };

  return (
    <div className="register-container fade-in">
      <h2 className="register-title">Create Your TrackItRight Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="USER">User</option>
          <option value="AUTHORITY">Authority</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>

      <p className='loginPara'>
      Already Have an Account ? 
      <a href='/login' className='Login_button'> Login Here </a>
      </p>

      {message && (
        <p className={`register-message ${message.includes('success') ? 'success' : 'error'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
