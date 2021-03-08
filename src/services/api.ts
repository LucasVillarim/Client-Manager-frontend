import axios from 'axios';

const api = axios.create({
  baseURL: 'https://client-manager-backend.herokuapp.com',
});

export default api;
