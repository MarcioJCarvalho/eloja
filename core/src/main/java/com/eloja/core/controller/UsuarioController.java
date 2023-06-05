package com.eloja.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/usuarios")
public class UsuarioController {
    @PostMapping
    public String cadastrarUsuarioEmpresa(){
        return "Sucess!!";
    }

}
