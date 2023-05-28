package com.eloja.core.service;

import com.eloja.core.entity.Juridica;
import com.eloja.core.repository.JuridicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JuridicaService {
    @Autowired
    private JuridicaRepository juridicaRepository;

    public Juridica salvar(Juridica juridica){
        return juridicaRepository.saveAndFlush(juridica);
    }

    public Juridica editar(Juridica juridica){
        return juridicaRepository.saveAndFlush(juridica);
    }

    public void excluir(Integer id){
        Juridica juridica = juridicaRepository.findById(id).get();
        juridicaRepository.delete(juridica);

    }

    public List<Juridica> listarTodos(){
        return juridicaRepository.findAll();
    }
}
