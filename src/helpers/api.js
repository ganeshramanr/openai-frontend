import axios from 'axios';
import {config} from '../config'

const api = axios.create({
  baseURL: config.authApiUrl
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      logout();
    }
    return Promise.reject(error);
  }
);

export const get = (url, config = {}) => api.get(url, config);
export const post = (url, data, config = {}) => api.post(url, data, config);
export const put = (url, data, config = {}) => api.put(url, data, config);
export const del = (url, config = {}) => api.delete(url, config);

function logout() {
  // Clear local storage, cookies, or any other stored auth data
//   localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('google');
  

  // Redirect to login page
  window.location.href = '/';
//   navigate("/");
}

export default api;