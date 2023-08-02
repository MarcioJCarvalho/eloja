package com.eloja.core.service;

import com.eloja.core.dto.EnderecoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface EnderecoService {

    ResponseEntity<EnderecoDTO> salvar(EnderecoDTO enderecoDTO);

    ResponseEntity<EnderecoDTO> editar(EnderecoDTO enderecoDTO);

    ResponseEntity<String> excluir(Integer enderecoId);

    Page<EnderecoDTO> listarTodos(Pageable pageable);
}
