import axios from 'axios';
import axiosRetry from 'axios-retry';

const baseURL = 'http://localhost:8000/';

const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 50000, 
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosRetry(AxiosInstance, {
    retries: 3,
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED';
    },
    retryDelay: (retryCount) => {
        return retryCount * 1000;
    },
});

export default AxiosInstance;
