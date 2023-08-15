package com.eloja.core.service;

import com.eloja.core.dto.FisicaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface FisicaService {

    ResponseEntity<FisicaDTO> salvar(FisicaDTO fisicaDTO);

    ResponseEntity<FisicaDTO> editar(FisicaDTO fisicaDTO);

    ResponseEntity<String> excluir(Integer fisicaId);

    ResponseEntity<Page<FisicaDTO>> listarTodos(Pageable pageable);
}
