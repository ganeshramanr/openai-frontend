import { useState, useEffect } from 'react'
import axios from 'axios';

import {config} from '../config'

const ME_API = config.authApiUrl + "/api/user/me"

const SettingsPage = () => {
  const [email, setEmail] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState('');

  const token = window.localStorage.getItem('token');
  
  useEffect(
    () => {
      axios.get(ME_API, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        const user = res.data.data;
        setEmail(user.email);
        setFName(user.firstname);
        setLName(user.lastname);
        console.log(user);
      }).catch((err) => console.log(err));
    },
    []
  );

  const updateUser = (e: any) => {
    e.preventDefault();

    // Clear success and error message before submitting the request
    setError('');
    setUpdate(false);

    axios.put(ME_API, {
        firstname: fname,
        lastname: lname
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        setUpdate(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <h2>Settings</h2>
      <section className="widget">
        <div className="settings-container">
          <form className="login-signup-form" onSubmit={updateUser}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name:</label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                required
              />
            </div>

            <div className='div-bottom-padding'>
              <button type="submit" className="signup-button">
                Update
              </button>
            </div>

            { update ? 
              <div className='blue-text-padding'>User Updated Successfully.</div>  
              : null
            }
            { error ? 
              <div className='red-text-padding'>{error}</div>  
              : null
            }
          </form>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage