package com.eloja.core.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotEmpty
    @Column(nullable = false)
    private String cep;

    @NotEmpty
    @Column(nullable = false)
    private String logradouro;

    @NotNull
    @Column(nullable = false)
    private String numero;

    private String complemento;

    @NotEmpty
    @Column(nullable = false)
    private String bairro;

    @NotEmpty
    @Column(nullable = false, length = 7)
    private String ibge;

    @NotEmpty
    @Column(nullable = false, length = 2)
    private String uf;
}
