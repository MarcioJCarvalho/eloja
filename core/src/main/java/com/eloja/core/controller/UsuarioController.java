package com.eloja.core.controller;

import com.eloja.core.dto.UsuarioDTO;
import com.eloja.core.entity.Usuario;
import com.eloja.core.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;
    @Autowired
    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> salvar(@RequestBody UsuarioDTO usuarioDTO){
        return usuarioService.salvar(usuarioDTO);
    }

    @PutMapping
    public ResponseEntity<UsuarioDTO> editar(@RequestBody UsuarioDTO usuarioDTO){
        return usuarioService.editar(usuarioDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") Integer usuarioId){
        return usuarioService.excluir(usuarioId);
    }

    @GetMapping
    public ResponseEntity<Page<UsuarioDTO>> listarTodos(Pageable pageable){
        return usuarioService.listarTodos(pageable);
    }


}
