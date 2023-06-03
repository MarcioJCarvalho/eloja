package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CNPJ;

public class JuridicaDTO {
    Integer id;

    @NotEmpty
    private String razaoSocial;

    @NotEmpty
    private String nomeFantasia;

    @CNPJ
    @NotEmpty
    private String cnpj;

    private String inscricao_estadual;
}
