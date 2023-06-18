package com.eloja.core.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@MappedSuperclass
public class Pessoa {

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(nullable = false)
    private Endereco endereco;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "telefone", nullable = false)
    private List<Telefone> telefones;
}
