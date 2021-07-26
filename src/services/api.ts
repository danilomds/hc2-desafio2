import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dmtech.netlify.app/produtos'
});


export default api; 
