package com.eloja.core.service;

import com.eloja.core.entity.Telefone;
import com.eloja.core.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TelefoneService {
    @Autowired
    private TelefoneRepository telefoneRepository;

    public Telefone salvar(Telefone telefone){
        return telefoneRepository.saveAndFlush(telefone);
    }

    public Telefone editar(Telefone telefone){
        return telefoneRepository.saveAndFlush(telefone);
    }

    public void excluir(Integer id){
        Telefone telefone = telefoneRepository.findById(id).get();
        telefoneRepository.delete(telefone);
    }

    public List<Telefone> listarTodos(){
        return telefoneRepository.findAll();
    }
}
