import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9005'
});

export default api;