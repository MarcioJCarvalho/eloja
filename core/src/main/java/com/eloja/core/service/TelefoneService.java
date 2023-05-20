package com.eloja.core.service;

import com.eloja.core.repository.TelefoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelefoneService {
    @Autowired
    private TelefoneRepository telefoneRepository;
}
