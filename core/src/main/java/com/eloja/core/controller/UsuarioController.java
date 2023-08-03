package com.eloja.core.controller;

import com.eloja.core.dto.UsuarioDTO;
import com.eloja.core.entity.Usuario;
import com.eloja.core.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario salvar(@RequestBody UsuarioDTO usuarioDto) {
        return usuarioService.salvar(usuarioDto);
    }


}
