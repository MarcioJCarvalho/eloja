package com.eloja.core.dto;

import com.eloja.core.entity.Categoria;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class ProdutoDTO {
    private Integer id;

    @NotEmpty
    private String nome;

    @NotEmpty
    private String marca;

    private String cor;

    @NotEmpty
    private String descricao;

    @NotEmpty
    private Double valorDeCompra;

    private Double valorDeVenda;

    private String tamanho;
    @NotEmpty
    private List<Categoria> categoria;

}
