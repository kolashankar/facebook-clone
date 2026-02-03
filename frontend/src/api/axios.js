import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

export default axios.create({
    baseURL: `${BASE_URL}/api`
});

export const axiosPrivate = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
