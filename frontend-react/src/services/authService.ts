import api from '../axios/Api';
import Login from '../models/Login';

export const auth = async (login: Login) => {
  return await api.post('/login', login).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
