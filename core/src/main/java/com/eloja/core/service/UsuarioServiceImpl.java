package com.eloja.core.service;

import com.eloja.core.dto.UsuarioDTO;
import com.eloja.core.entity.Usuario;
import com.eloja.core.repository.UsuarioRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;


    @Autowired
    protected UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public ResponseEntity<UsuarioDTO> salvar(UsuarioDTO usuarioDTO) {
        Usuario usuario = ParseUtils.parse(usuarioDTO, Usuario.class);
        UsuarioDTO usuarioDTORetorno = ParseUtils.parse(usuarioRepository.saveAndFlush(usuario), UsuarioDTO.class);
        return new ResponseEntity<>(usuarioDTORetorno, HttpStatus.CREATED);
    }

    public ResponseEntity<UsuarioDTO> editar(UsuarioDTO usuarioDTO) {
        Usuario usuario = ParseUtils.parse(usuarioDTO, Usuario.class);
        UsuarioDTO usuarioDTORetorno = ParseUtils.parse(usuarioRepository.saveAndFlush(usuario), UsuarioDTO.class);
        return new ResponseEntity<>(usuarioDTORetorno, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId).get();
        usuarioRepository.delete(usuario);
        return new ResponseEntity<>("Usuário excluido com sucesso!", HttpStatus.OK);
    }


    public ResponseEntity<Page<UsuarioDTO>> listarTodos(Pageable pageable) {
        Page<Usuario> resultado = usuarioRepository.findAll(pageable);
        Page<UsuarioDTO> resultadoDTO =  resultado.map(
                usuario -> ParseUtils.parse(usuario, UsuarioDTO.class)
        );
        return new ResponseEntity<>(resultadoDTO, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<UsuarioDTO> getUserById(Integer id) {
        Optional<Usuario> resultado = usuarioRepository.findById(id);

        return ResponseEntity.status(HttpStatus.OK).body(ParseUtils.parse(resultado, UsuarioDTO.class));
    }


}
