package com.eloja.core.service;

import com.eloja.core.dto.JuridicaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface JuridicaService{

    ResponseEntity<JuridicaDTO> salvar(JuridicaDTO juridicaDTO);

    ResponseEntity<JuridicaDTO> editar(JuridicaDTO juridicaDTO);

    ResponseEntity<String> excluir(Integer juridicaId);

    Page<JuridicaDTO> listarTodos(Pageable pageable);
}
