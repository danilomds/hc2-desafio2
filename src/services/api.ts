import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dmtech.netlify.app:8080/produtos'
});


export default api; 
