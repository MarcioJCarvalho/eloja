package com.eloja.core.service;

import com.eloja.core.dto.ProdutoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface ProdutoService {
    ResponseEntity<ProdutoDTO> salvar (ProdutoDTO produtoDTO);

    ResponseEntity<ProdutoDTO> editar(ProdutoDTO produtoDTO);

    ResponseEntity<String> excluir(Integer produtoId);

    ResponseEntity<Page<ProdutoDTO>> listarTodos(Pageable pageable);
}
