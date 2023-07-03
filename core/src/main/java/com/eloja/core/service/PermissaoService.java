package com.eloja.core.service;

import com.eloja.core.dto.PermissaoDTO;
import com.eloja.core.entity.Permissao;
import com.eloja.core.repository.PermissaoRepository;
import com.eloja.core.utils.ParseUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissaoService {

    @Autowired
    private PermissaoRepository permissaoRepository;

    public PermissaoDTO salvar(PermissaoDTO permissao) {
        Permissao entidadePermissao = ParseUtils.parse(permissao, Permissao.class);
        PermissaoDTO permissaoDto = ParseUtils.parse(permissaoRepository.saveAndFlush(entidadePermissao), PermissaoDTO.class);
        return permissaoDto;
    }

    public PermissaoDTO editar(PermissaoDTO permissao) {
        Permissao entidadePermissao = ParseUtils.parse(permissao, Permissao.class);
        PermissaoDTO permissaoDto = ParseUtils.parse(permissaoRepository.saveAndFlush(entidadePermissao), PermissaoDTO.class);
        return permissaoDto;
    }

    public void excluir(Integer id) {
        permissaoRepository.deleteById(id);
    }

    public List<PermissaoDTO> listarTodos() {
        return ParseUtils.parse(permissaoRepository.findAll(), PermissaoDTO.class);

    }
}
