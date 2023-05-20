package com.eloja.core.service;

import com.eloja.core.repository.FisicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FisicaService {
    @Autowired
    private FisicaRepository fisicaRepository;
}
