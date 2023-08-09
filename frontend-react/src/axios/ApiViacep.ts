import axios from 'axios';

const apiViacep = axios.create({
  baseURL: 'http://viacep.com.br/ws',
});

export default apiViacep;
