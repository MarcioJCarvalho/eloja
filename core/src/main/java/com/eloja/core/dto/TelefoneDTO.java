package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;

public class TelefoneDTO {
    Integer id;

    @NotEmpty
    private String numero;
}
