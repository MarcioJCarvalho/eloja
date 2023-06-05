package com.eloja.core.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Juridica extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false)
    private String razaoSocial;

    @Column(nullable = false)
    private String nomeFantasia;

    @Column(nullable = false)
    private String cnpj;

    private String inscricao_estadual;

}
