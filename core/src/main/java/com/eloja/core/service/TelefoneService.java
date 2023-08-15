package com.eloja.core.service;

import com.eloja.core.dto.TelefoneDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface TelefoneService {

    ResponseEntity<TelefoneDTO> salvar(TelefoneDTO telefoneDTO);

    ResponseEntity<TelefoneDTO> editar(TelefoneDTO telefoneDTO);

    ResponseEntity<String> excluir(Integer telefoneId);

    ResponseEntity<Page<TelefoneDTO>> listarTodos(Pageable pageable);
}
