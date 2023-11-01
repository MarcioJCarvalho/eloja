package com.eloja.core.service;

import com.eloja.core.dto.CategoriaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface CategoriaService {
    ResponseEntity<CategoriaDTO> salvar(CategoriaDTO categoriaDTO);

    ResponseEntity<CategoriaDTO> editar(CategoriaDTO categoriaDTO);

    ResponseEntity<String> excluir(Integer categoriaId);

    ResponseEntity<Page<CategoriaDTO>> listarTodos(Pageable pageable);
}
