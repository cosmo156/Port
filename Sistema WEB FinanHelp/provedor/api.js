import Axios from 'axios';

const api = Axios.create({
    baseURL: 'colocar url da api'
});

export default api;