package com.eloja.core.controller;

import com.eloja.core.dto.PermissaoDTO;
import com.eloja.core.service.PermissaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/permissoes")
public class PermissaoController {

    final PermissaoService permisaoService;

    @PostMapping
    public PermissaoDTO salvar(@RequestBody PermissaoDTO permissaoDTO) {
        return permisaoService.salvar(permissaoDTO);
    }

    @PutMapping
    public PermissaoDTO editar(@RequestBody PermissaoDTO permissaoDTO) {
        return permisaoService.editar(permissaoDTO);
    }

    @GetMapping
    public List<PermissaoDTO> listarTodos(){
        return permisaoService.listarTodos();
    }

}
