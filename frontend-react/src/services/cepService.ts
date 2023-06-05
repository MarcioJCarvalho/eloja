import apiViacep from '../axios/ApiViacep';

export const buscarCep = async (cep: string) => {
  return await apiViacep.get(`/${cep}/json`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
