package com.eloja.core.entity;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

import java.util.List;

@Data
@MappedSuperclass
public class Pessoa {

    @ManyToOne
    @JoinColumn(nullable = false)
    private Endereco endereco;

    @ManyToMany
    @JoinColumn(name = "telefone", nullable = false)
    private List<Telefone> telefones;
}
