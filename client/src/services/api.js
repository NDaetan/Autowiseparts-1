// client/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust if needed

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;