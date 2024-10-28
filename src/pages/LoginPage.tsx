import { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";
import HRef from '@mui/material/Link';
import axios from 'axios';
import {config} from '../config'
import './LoginPage.css';


const LOGIN_API = config.authApiUrl + "/api/login"
const GUEST_EMAIL = import.meta.env.VITE_GUEST_EMAIL || "guest";
const GUEST_PASSWORD = import.meta.env.VITE_GUEST_PASSWORD || "easy";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: any) => {
    e?.preventDefault();

    axios
          .post(LOGIN_API, {
            email,
            password
          })
          .then((res) => {
            console.log(res.data.token);
            window.localStorage.setItem('user', email);
            window.localStorage.setItem('token', res.data.token);
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
            setError(err.response.data.error);
          });

  };

  const loginAsGuest = async () => {
    await axios
          .post(LOGIN_API, {
            email: GUEST_EMAIL,
            password: GUEST_PASSWORD
          })
          .then((res) => {
            console.log(res.data.token);
            window.localStorage.setItem('user', GUEST_EMAIL);
            window.localStorage.setItem('token', res.data.token);
            navigate("/home");
          })
          .catch((err) => {
            console.log(err);
            setError(err.response.data.error);
          });
  }

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

        <div className='div-bottom-padding'>
          <HRef component="button" variant="body2" onClick={() => loginAsGuest()}>Login as guest </HRef>
        </div>

        <Link to={`/register`}>New User Signup</Link>
      </form>
    </div>
  );
}

export default LoginPage;