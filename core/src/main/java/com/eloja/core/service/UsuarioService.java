package com.eloja.core.service;

import com.eloja.core.dto.UsuarioDTO;
import com.eloja.core.entity.Usuario;
import com.eloja.core.repository.UsuarioRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(UsuarioDTO usuarioDTO){
        return usuarioRepository.saveAndFlush(ParseUtils.parse(usuarioDTO, Usuario.class));
    }

    public Usuario editar(UsuarioDTO usuarioDTO){
        return usuarioRepository.saveAndFlush(ParseUtils.parse(usuarioDTO, Usuario.class));
    }

    public void excluir(Integer id){
        Usuario usuario =  usuarioRepository.findById(id).get();
        usuarioRepository.delete(usuario);
    }

    public List<Usuario> listarTodos(){
       return usuarioRepository.findAll();

    }
}
