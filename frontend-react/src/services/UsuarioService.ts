import api from '../axios/Api';
import Usuario from '../models/Usuario';
import {stringify} from "querystring";

const path = '/usuarios';

export const getAllUsuarios = async (page: number, rowsPerPage: number) => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('size', rowsPerPage.toString());

  return await api.get(path, {
      params
    }).catch((err) => {
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
