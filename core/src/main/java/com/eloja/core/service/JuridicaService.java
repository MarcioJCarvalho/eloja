package com.eloja.core.service;

import com.eloja.core.repository.JuridicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JuridicaService {
    @Autowired
    private JuridicaRepository juridicaRepository;
}
