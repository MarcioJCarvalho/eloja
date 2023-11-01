package com.eloja.core.controller;

import com.eloja.core.dto.ProdutoDTO;
import com.eloja.core.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;
    @Autowired
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> salvar(@RequestBody ProdutoDTO produtoDTO){
        return produtoService.salvar(produtoDTO);
    }

    @PutMapping
    public ResponseEntity<ProdutoDTO> editar(@RequestBody ProdutoDTO produtoDTO){
        return produtoService.editar(produtoDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable("id") Integer produtoId){
        return produtoService.excluir(produtoId);
    }

    @GetMapping
    public ResponseEntity<Page<ProdutoDTO>> listarTodos(Pageable pageable){
        return produtoService.listarTodos(pageable);
    }
}
