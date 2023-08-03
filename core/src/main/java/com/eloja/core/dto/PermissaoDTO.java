package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class PermissaoDTO{

    private Integer id;

    @NotEmpty
    private String nome;

    @NotEmpty
    private String descricao;

}
