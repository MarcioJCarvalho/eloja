import api from '../axios/Api';
import Juridica from '../models/Juridica';

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

export const salvarEmpresa = async (empresa: Juridica) => {
  return await api.post('/empresa', empresa).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarEmpresa = async (empresa: Juridica) => {
  return await api.put('/empresa', empresa).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarEmpresa = async (id: number) => {
  return await api.delete(`/empresa/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
