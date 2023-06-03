package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.hibernate.validator.constraints.br.CNPJ;
@Data
public class JuridicaDTO extends PessoaDTO{
    private Integer id;

    @NotEmpty
    private String razaoSocial;

    @NotEmpty
    private String nomeFantasia;

    @CNPJ
    @NotEmpty
    private String cnpj;

    private String inscricao_estadual;
}
