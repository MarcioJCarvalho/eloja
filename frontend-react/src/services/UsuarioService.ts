import api from '../axios/Api';
import Usuario from '../models/Usuario';

export const getAllUsuarios = async () => {
  return await api.get('/usuario').catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const getUsuarioById = async (id: number) => {
  return await api.get(`/usuario/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const salvarUsuario = async (usuario: Usuario) => {
  return await api.post('/usuario', usuario).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarUsuario = async (usuario: Usuario) => {
  return await api.put('/usuario', usuario).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarUsuario = async (id: number) => {
  return await api.delete(`/usuario/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
