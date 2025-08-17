// client/src/services/api.js
import axios from 'axios';

// Use environment-based API URL
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/api' // Use relative path in production (Vercel)
  : 'http://localhost:5000/api'; // Local development

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;