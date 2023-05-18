package com.eloja.core.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.hibernate.validator.constraints.br.CNPJ;

@Entity
@Data
public class Juridica extends Pessoa{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotEmpty
    @Column(nullable = false)
    private String razaoSocial;

    @NotEmpty
    @Column(nullable = false)
    private String nomeFantasia;

    @CNPJ
    @NotEmpty
    @Column(nullable = false)
    private String cnpj;

    private String inscricao_estadual;

}
