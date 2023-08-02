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

import java.util.function.Function;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private UsuarioRepository usuarioRepository;


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

    public ResponseEntity<String> excluir(Integer id) {
        usuarioRepository.deleteById(id);
        return new ResponseEntity<>("Usuário excluido com sucesso!", HttpStatus.OK);
    }


    public Page<UsuarioDTO> listarTodos(Pageable pageable) {
        Page<Usuario> resultado = usuarioRepository.findAll(pageable);
        Page<UsuarioDTO> resultadoDTO = resultado.map(
                new Function<>() {
                    @Override
                    public UsuarioDTO apply(Usuario usuario) {
                        return ParseUtils.parse(usuario, UsuarioDTO.class);
                    }
                }
        );
        return resultadoDTO;
    }


}
