package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EnderecoDTO {
    private Integer id;

    @NotEmpty
    private String cep;

    @NotEmpty
    private String logradouro;

    @NotNull
    private String numero;

    private String complemento;

    @NotEmpty
    private String bairro;

    @NotEmpty
    @Size(min = 7, max = 7, message = "O tamanho deve ser 7")
    private String ibge;

    @NotEmpty
    @Size(min = 2, max = 2, message = "O tamanho deve ser 2")
    private String uf;
}
