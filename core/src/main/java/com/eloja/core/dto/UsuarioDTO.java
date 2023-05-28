package com.eloja.core.dto;

import com.eloja.core.entity.Fisica;
import com.eloja.core.entity.Juridica;
import jakarta.validation.constraints.NotBlank;

public class UsuarioDTO {
    Integer id;

    @NotBlank
    private String email;

    @NotBlank
    private String senha;

    private Fisica fisica;

    private Juridica juridica;
}
