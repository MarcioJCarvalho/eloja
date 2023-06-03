package com.eloja.core.dto;

import jakarta.validation.constraints.NotBlank;

public class UsuarioDTO {
    Integer id;

    @NotBlank
    private String email;

    @NotBlank
    private String senha;

    private FisicaDTO fisica;

    private JuridicaDTO juridica;
}
