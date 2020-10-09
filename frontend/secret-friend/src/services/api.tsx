import axios from 'axios';

let baseURL = 'http://localhost:3005/api';

const api = axios.create({
  baseURL,
});

export default api;