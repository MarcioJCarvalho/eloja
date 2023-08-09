package com.eloja.core.service;

import com.eloja.core.dto.TelefoneDTO;
import com.eloja.core.entity.Telefone;
import com.eloja.core.repository.TelefoneRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TelefoneServiceImpl implements TelefoneService{
    private final TelefoneRepository telefoneRepository;
    @Autowired
    protected TelefoneServiceImpl(TelefoneRepository telefoneRepository){
        this.telefoneRepository= telefoneRepository;
    }

    public ResponseEntity<TelefoneDTO> salvar(TelefoneDTO telefoneDTO){
        Telefone telefone = ParseUtils.parse(telefoneDTO, Telefone.class);
        telefoneRepository.saveAndFlush(telefone);
        TelefoneDTO telefoneDTOResponse = ParseUtils.parse(telefoneRepository.saveAndFlush(telefone), TelefoneDTO.class);
        return new ResponseEntity<>(telefoneDTOResponse, HttpStatus.CREATED);
    }

    public ResponseEntity<TelefoneDTO> editar(TelefoneDTO telefoneDTO){
        Telefone telefone = ParseUtils.parse(telefoneDTO, Telefone.class);
        telefoneRepository.saveAndFlush(telefone);
        TelefoneDTO telefoneDTOResponse = ParseUtils.parse(telefoneRepository.saveAndFlush(telefone), TelefoneDTO.class);
        return new ResponseEntity<>(telefoneDTOResponse, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer telefoneId){
        Telefone telefone = telefoneRepository.findById(telefoneId).get();
        telefoneRepository.delete(telefone);
        return new ResponseEntity<>("Telefone excluído com sucesso", HttpStatus.OK);
    }

    public ResponseEntity<Page<TelefoneDTO>> listarTodos(Pageable pageable){

        Page<Telefone> resultado = telefoneRepository.findAll(pageable);
        Page<TelefoneDTO> resultadoDTO =  resultado.map(
                telefone -> ParseUtils.parse(telefone, TelefoneDTO.class)
        );
        return new ResponseEntity<>(resultadoDTO, HttpStatus.OK);
    }
}
