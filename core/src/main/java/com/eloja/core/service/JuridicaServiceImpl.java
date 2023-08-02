package com.eloja.core.service;

import com.eloja.core.dto.JuridicaDTO;
import com.eloja.core.entity.Juridica;
import com.eloja.core.repository.JuridicaRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.function.Function;


@Service
public class JuridicaServiceImpl implements JuridicaService {

    private JuridicaRepository juridicaRepository;

    @Autowired
    protected JuridicaServiceImpl(JuridicaRepository juridicaRepository){
        this.juridicaRepository = juridicaRepository;
    }

    public ResponseEntity<JuridicaDTO> salvar(JuridicaDTO juridicaDTO){
        Juridica juridica = ParseUtils.parse(juridicaDTO, Juridica.class);
        JuridicaDTO respostaDTO = ParseUtils.parse(juridicaRepository.saveAndFlush(juridica), JuridicaDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.CREATED);
    }

    public ResponseEntity<JuridicaDTO> editar(JuridicaDTO juridicaDTO){
        Juridica juridica = ParseUtils.parse(juridicaDTO, Juridica.class);
        JuridicaDTO respostaDTO = ParseUtils.parse(juridicaRepository.saveAndFlush(juridica), JuridicaDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer juridicaId){
        Juridica juridica = juridicaRepository.findById(juridicaId).get();
        juridicaRepository.delete(juridica);
        return new ResponseEntity<>("Cadastro excluído com sucesso!", HttpStatus.OK);

    }

    public Page<JuridicaDTO> listarTodos(Pageable pageable){
        Page<Juridica> juridicaPage = juridicaRepository.findAll(pageable);
        Page<JuridicaDTO> juridicaDTOPage = juridicaPage.map(
                new Function<>(){
                    public JuridicaDTO apply(Juridica juridica){
                        return ParseUtils.parse(juridica, JuridicaDTO.class);
                    }
                }

        );
        return juridicaDTOPage;

    }
}
