package com.eloja.core.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class CategoriaDTO {

    private Integer id;

    @NotBlank
    private String nome;
}
