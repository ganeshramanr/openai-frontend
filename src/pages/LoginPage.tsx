import { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import {config} from '../config'
import './LoginPage.css';


const LOGIN_API = config.authApiUrl + "/api/user/login"

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Here you would typically send the email and password to your server
    console.log('Login attempt with:', email, password);

    axios
          .post(LOGIN_API, {
            email,
            password
          })
          .then(() => {
            window.localStorage.setItem('user', email);
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
            setError(err.response.data.error);
          });

  };

  return (
    <div className="login-signup-container">
      <form className="login-signup-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='div-bottom-padding'>
          <button type="submit" className="login-button">
            Log In
          </button>
        </div>
        { error ? 
          <div className='red-text-padding'>{error}</div>  
          : null
        }
        
        <Link to={`/register`}>New User Signup</Link>
      </form>
    </div>
  );
}

export default LoginPage;