package com.eloja.core.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class TelefoneDTO {

    private Integer id;

    @NotEmpty
    private String numero;
}
