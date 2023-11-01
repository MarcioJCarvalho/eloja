import api from '../axios/Api';
import Produto from '../models/Produto';

export const getAllProdutos = async () => {
  return await api.get('/produto').catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const getProdutoById = async (id: number) => {
  return await api.get(`/produto/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const salvarProduto = async (produto: Produto) => {
  return await api.post('/produto', produto).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const atualizarProduto = async (produto: Produto) => {
  return await api.put('/produto', produto).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};

export const deletarProduto = async (id: number) => {
  return await api.delete(`/produto/${id}`).catch((err) => {
    console.error('ocorreu um erro' + err);
  });
};
