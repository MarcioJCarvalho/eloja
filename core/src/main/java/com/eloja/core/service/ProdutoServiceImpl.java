package com.eloja.core.service;

import com.eloja.core.dto.ProdutoDTO;
import com.eloja.core.dto.UsuarioDTO;
import com.eloja.core.entity.Produto;
import com.eloja.core.entity.Usuario;
import com.eloja.core.repository.ProdutoRepository;
import com.eloja.core.repository.UsuarioRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProdutoServiceImpl implements ProdutoService {
    private final ProdutoRepository produtoRepository;

    @Autowired
    protected ProdutoServiceImpl(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public ResponseEntity<ProdutoDTO> salvar(ProdutoDTO produtoDTO) {
        Produto produto = ParseUtils.parse(produtoDTO, Produto.class);
        ProdutoDTO produtoDTORetorno = ParseUtils.parse(produtoRepository.saveAndFlush(produto), ProdutoDTO.class);
        return new ResponseEntity<>(produtoDTORetorno, HttpStatus.CREATED);
    }

    public ResponseEntity<ProdutoDTO> editar(ProdutoDTO produtoDTO) {
        Produto produto = ParseUtils.parse(produtoDTO, Produto.class);
        ProdutoDTO produtoDTORetorno = ParseUtils.parse(produtoRepository.saveAndFlush(produto), ProdutoDTO.class);
        return new ResponseEntity<>(produtoDTORetorno, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer produtoId) {
        produtoRepository.deleteById(produtoId);
        return new ResponseEntity<>("Produto Excluído com Sucesso!", HttpStatus.OK);
    }


    public ResponseEntity<Page<ProdutoDTO>> listarTodos(Pageable pageable) {
        Page<Produto> resultado = produtoRepository.findAll(pageable);
        Page<ProdutoDTO> resultadoDTO =  resultado.map(
                produto -> ParseUtils.parse(produto, ProdutoDTO.class)
        );
        return new ResponseEntity<>(resultadoDTO, HttpStatus.OK);
    }
}

