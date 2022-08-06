import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dashboard-api.tteld.com/api/',
    // baseURL: 'https://dev.tteld.com/api/',
});

const token: string | null = localStorage.getItem('token');
if(token) {
    instance.defaults.headers.common['Authorization'] = token;
}


export default instance;