package com.eloja.core.service;

import com.eloja.core.dto.CategoriaDTO;
import com.eloja.core.entity.Categoria;
import com.eloja.core.repository.CategoriaRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CategoriaServiceImpl implements CategoriaService {
    private final CategoriaRepository categoriaRepository;

    @Autowired
    protected CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public ResponseEntity<CategoriaDTO> salvar(CategoriaDTO categoriaDTO) {
        Categoria categoria = ParseUtils.parse(categoriaDTO, Categoria.class);
        CategoriaDTO categoriaDTORetorno = ParseUtils.parse(categoriaRepository.saveAndFlush(categoria), CategoriaDTO.class);
        return new ResponseEntity<>(categoriaDTORetorno, HttpStatus.CREATED);
    }

    public ResponseEntity<CategoriaDTO> editar(CategoriaDTO categoriaDTO) {
        Categoria categoria = ParseUtils.parse(categoriaDTO, Categoria.class);
        CategoriaDTO categoriaDTORetorno = ParseUtils.parse(categoriaRepository.saveAndFlush(categoria), CategoriaDTO.class);
        return new ResponseEntity<>(categoriaDTORetorno, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer categoriaId) {
        Categoria categoria = categoriaRepository.findById(categoriaId).get();
        categoriaRepository.delete(categoria);
        return new ResponseEntity<>("Categoria excluida com sucesso!", HttpStatus.OK);
    }


    public ResponseEntity<Page<CategoriaDTO>> listarTodos(Pageable pageable) {
        Page<Categoria> resultado = categoriaRepository.findAll(pageable);
        Page<CategoriaDTO> resultadoDTO =  resultado.map(
                categoria -> ParseUtils.parse(categoria, CategoriaDTO.class)
        );
        return new ResponseEntity<>(resultadoDTO, HttpStatus.OK);
    }


}
