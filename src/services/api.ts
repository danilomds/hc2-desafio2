import axios from 'axios';
import 'dotenv/config';

const url = process.env.NODE_ENV === 'production' ? 'https://dmtech.netlify.app:8080' : 'http://localhost:8080';

const api = axios.create({
  baseURL: `${url}/produtos`
});

export default api; 
