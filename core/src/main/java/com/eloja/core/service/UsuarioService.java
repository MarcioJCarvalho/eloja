package com.eloja.core.service;

import com.eloja.core.entity.Usuario;
import com.eloja.core.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){
        return usuarioRepository.saveAndFlush(usuario);
    }

    public Usuario editar(Usuario usuario){
        return usuarioRepository.saveAndFlush(usuario);
    }

    public void excluir(Integer id){
        Usuario usuario =  usuarioRepository.findById(id).get();
        usuarioRepository.delete(usuario);
    }

    public List<Usuario> listarTodos(){
       return usuarioRepository.findAll();

    }
}
