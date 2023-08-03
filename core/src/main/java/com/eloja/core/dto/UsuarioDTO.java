package com.eloja.core.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UsuarioDTO {
    private Integer id;

    @NotBlank
    private String email;

    @NotBlank
    private String senha;

    private FisicaDTO fisica;

    private JuridicaDTO juridica;
}
