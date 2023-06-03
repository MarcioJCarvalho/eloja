package com.eloja.core.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CPF;

public class FisicaDTO {
    Integer id;

    @NotBlank
    private String nome;

    @NotBlank
    private String sobrenome;

    @CPF
    @NotEmpty
    private String cpf;
}
