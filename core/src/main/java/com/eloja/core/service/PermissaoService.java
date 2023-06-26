package com.eloja.core.service;

import com.eloja.core.entity.Permissao;
import com.eloja.core.repository.PermissaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissaoService {

    @Autowired
    private PermissaoRepository permissaoRepository;

    public Permissao salvar(Permissao permissao){
        return permissaoRepository.saveAndFlush(permissao);
    }

    public Permissao editar(Permissao permissao){
        return permissaoRepository.saveAndFlush(permissao);
    }

    public void excluir(Integer id){
        permissaoRepository.deleteById(id);
    }

    public List<Permissao> listarTodos(){
        return permissaoRepository.findAll();
    }
}
