package com.eloja.core.service;

import com.eloja.core.dto.EnderecoDTO;
import com.eloja.core.entity.Endereco;
import com.eloja.core.repository.EnderecoRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.function.Function;

@Service
public class EnderecoServiceImpl implements EnderecoService {
    private EnderecoRepository enderecoRepository;

    @Autowired
    protected EnderecoServiceImpl(EnderecoRepository enderecoRepository){
        this.enderecoRepository = enderecoRepository;
    }

    public ResponseEntity<EnderecoDTO> salvar(EnderecoDTO enderecoDTO){
        Endereco endereco = ParseUtils.parse(enderecoDTO, Endereco.class);
        EnderecoDTO respostaDTO = ParseUtils.parse(enderecoRepository.saveAndFlush(endereco), EnderecoDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.CREATED);
    }

    public ResponseEntity<EnderecoDTO> editar(EnderecoDTO enderecoDTO){
        Endereco endereco = ParseUtils.parse(enderecoDTO, Endereco.class);
        EnderecoDTO respostaDTO = ParseUtils.parse(enderecoRepository.saveAndFlush(endereco), EnderecoDTO.class);
        return new ResponseEntity<>(respostaDTO, HttpStatus.OK);
    }

    public ResponseEntity<String> excluir(Integer enderecoId){
        Endereco endereco = enderecoRepository.findById(enderecoId).get();
        enderecoRepository.delete(endereco);
        return new ResponseEntity<>("Cadastro excluído com sucesso!", HttpStatus.OK);
    }

    public Page<EnderecoDTO> listarTodos(Pageable pageable){
        Page<Endereco> enderecoPage = enderecoRepository.findAll(pageable);
        Page<EnderecoDTO> enderecoDTOPage = enderecoPage.map(
                new Function<>() {
                    @Override
                    public EnderecoDTO apply(Endereco endereco) {
                        return ParseUtils.parse(endereco, EnderecoDTO.class);
                    }
                }
        );
        return  enderecoDTOPage;
    }


}
