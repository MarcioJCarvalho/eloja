import api from '../axios/Api';
import Usuario from '../models/Usuario';

const path = '/usuarios';

export const getAllUsuarios = async () => {
  return await api.get(path).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const getUsuarioById = async (id: number) => {
  return await api.get(`${path}/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const salvarUsuario = async (usuario: Usuario) => {
  return await api.post(path, usuario).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarUsuario = async (usuario: Usuario) => {
  return await api.put(path, usuario).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarUsuario = async (id: number) => {
  return await api.delete(`${path}/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
