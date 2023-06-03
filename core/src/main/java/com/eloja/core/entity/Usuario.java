package com.eloja.core.entity;

import com.eloja.core.dto.UsuarioDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @OneToOne(cascade = CascadeType.PERSIST)
    private Fisica fisica;

    @OneToOne(cascade = CascadeType.PERSIST)
    private Juridica juridica;


}
