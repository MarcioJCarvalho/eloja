import api from '../axios/Api';
import Juridica from '../models/Juridica';

export const getAllJuridicas = async () => {
  return await api.get('/juridica').catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const getJuridicaById = async (id: number) => {
  return await api.get(`/juridica/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const salvarJuridica = async (juridica: Juridica) => {
  return await api.post('/juridica', juridica).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarJuridica = async (juridica: Juridica) => {
  return await api.put('/juridica', juridica).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarJuridica = async (id: number) => {
  return await api.delete(`/juridica/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
