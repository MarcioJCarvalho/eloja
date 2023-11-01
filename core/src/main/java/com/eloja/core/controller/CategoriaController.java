package com.eloja.core.controller;

import com.eloja.core.dto.CategoriaDTO;
import com.eloja.core.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    private final CategoriaService categoriaService;
    @Autowired
    public CategoriaController(CategoriaService categoriaService){
        this.categoriaService = categoriaService;
    }

    @PostMapping
    public ResponseEntity<CategoriaDTO> salvar(@RequestBody CategoriaDTO categoriaDTO){
        return categoriaService.salvar(categoriaDTO);
    }

    @PutMapping
    public ResponseEntity<CategoriaDTO> editar(@RequestBody CategoriaDTO categoriaDTO){
        return categoriaService.editar(categoriaDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") Integer categoriaId){
        return categoriaService.excluir(categoriaId);
    }

    @GetMapping
    public ResponseEntity<Page<CategoriaDTO>> listarTodos(Pageable pageable){
        return categoriaService.listarTodos(pageable);
    }
}
