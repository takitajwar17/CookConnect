import axios from 'axios';

const baseURL = 'http://localhost:8000/';

const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        // Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default AxiosInstance;