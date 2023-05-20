package com.eloja.core.service;

import com.eloja.core.entity.Endereco;
import com.eloja.core.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {
    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco salvar(Endereco endereco){
        return enderecoRepository.saveAndFlush(endereco);
    }

    public Endereco editar(Endereco endereco){
        return enderecoRepository.saveAndFlush(endereco);
    }

    public void excluir(Integer id){
        Endereco endereco = enderecoRepository.findById(id).get();
        enderecoRepository.delete(endereco);
    }

    public List<Endereco> listar(){
        return enderecoRepository.findAll();
    }


}
