package com.eloja.core.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Telefone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false)
    private String numero;
}
