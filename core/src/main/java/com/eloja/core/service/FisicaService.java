package com.eloja.core.service;

import com.eloja.core.entity.Fisica;
import com.eloja.core.repository.FisicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FisicaService {
    @Autowired
    private FisicaRepository fisicaRepository;

    public Fisica salvar(Fisica fisica){
       return fisicaRepository.saveAndFlush(fisica);
    }

    public Fisica editar(Fisica fisica){
        return fisicaRepository.saveAndFlush(fisica);
    }

    public void excluir(Integer id){
        Fisica fisica = fisicaRepository.findById(id).get();
        fisicaRepository.delete(fisica);
    }

    public List<Fisica> listarTodos(){
        return fisicaRepository.findAll();
    }
}
