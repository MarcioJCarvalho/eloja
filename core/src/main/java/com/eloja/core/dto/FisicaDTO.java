package com.eloja.core.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.hibernate.validator.constraints.br.CPF;
@Data
public class FisicaDTO extends PessoaDTO{
    private Integer id;

    @NotBlank
    private String nome;

    @NotBlank
    private String sobrenome;

    @CPF
    @NotEmpty
    private String cpf;
}
