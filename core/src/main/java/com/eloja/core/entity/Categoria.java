package com.eloja.core.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class Categoria {

    @Column(nullable = false)
    private String nome;
}
