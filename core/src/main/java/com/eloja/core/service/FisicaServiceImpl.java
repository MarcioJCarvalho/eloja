package com.eloja.core.service;

import com.eloja.core.dto.FisicaDTO;
import com.eloja.core.entity.Fisica;
import com.eloja.core.repository.FisicaRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FisicaServiceImpl implements FisicaService{

    private final FisicaRepository fisicaRepository;
    @Autowired
    protected FisicaServiceImpl(FisicaRepository fisicaRepository){
        this.fisicaRepository = fisicaRepository;
    }

    public ResponseEntity<FisicaDTO> salvar(FisicaDTO fisicaDTO){
        Fisica fisica = ParseUtils.parse(fisicaDTO, Fisica.class);
        FisicaDTO respostaDTO = ParseUtils.parse(fisicaRepository.saveAndFlush(fisica), FisicaDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.CREATED);
    }

    public ResponseEntity<FisicaDTO> editar(FisicaDTO fisicaDTO){
        Fisica fisica = ParseUtils.parse(fisicaDTO, Fisica.class);
        FisicaDTO respostaDTO = ParseUtils.parse(fisicaRepository.saveAndFlush(fisica), FisicaDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer fisicaId){
        Fisica fisica = fisicaRepository.findById(fisicaId).get();
        fisicaRepository.delete(fisica);
        return new ResponseEntity<>("Cadastro excluído com sucesso!", HttpStatus.OK);
    }

    public ResponseEntity<Page<FisicaDTO>> listarTodos(Pageable pageable){
        Page<Fisica> fisicaPage = fisicaRepository.findAll(pageable);
        Page<FisicaDTO> resultadoDTO = fisicaPage.map(
                fisica -> ParseUtils.parse(fisica, FisicaDTO.class)
        );
        return new ResponseEntity<>(resultadoDTO, HttpStatus.OK);

    }
}
