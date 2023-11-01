package com.eloja.core.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String marca;

    private String cor;

    @Lob
    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private Double valorDeCompra;

    private Double valorDeVenda;

    @Size(min = 1, max = 3)
    private String tamanho;

    @ManyToMany
    @Column(nullable = false)
    private List<Categoria> categoria;

}
