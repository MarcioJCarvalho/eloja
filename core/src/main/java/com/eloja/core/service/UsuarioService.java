package com.eloja.core.service;

import com.eloja.core.dto.UsuarioDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface UsuarioService {
    ResponseEntity<UsuarioDTO> salvar(UsuarioDTO usuarioDTO);

    ResponseEntity<UsuarioDTO> editar(UsuarioDTO usuarioDTO);

    ResponseEntity<String> excluir(Integer usuarioId);

    ResponseEntity<Page<UsuarioDTO>> listarTodos(Pageable pageable);
}
