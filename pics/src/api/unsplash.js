import axios from 'axios';


const customAxios = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fB31clyTSiLH20JOOFHuLvIjTZ5mgAH5XzfzFqmXs5Y'
    }
});

export default customAxios;