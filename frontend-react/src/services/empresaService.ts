import api from '../axios/Api';
import Empresa from '../models/Empresa';

export const getAllEmpresas = async () => {
  return await api.get('/empresa').catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const getEmpresaById = async (id: number) => {
  return await api.get(`/empresa/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const salvarEmpresas = async (empresa: Empresa) => {
  return await api.post('/empresa', empresa).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarEmpresas = async (empresa: Empresa) => {
  return await api.put('/empresa', empresa).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarEmpresas = async (id: number) => {
  return await api.delete(`/empresa/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
