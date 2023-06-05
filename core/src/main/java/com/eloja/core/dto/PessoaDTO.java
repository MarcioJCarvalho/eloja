package com.eloja.core.dto;

import lombok.Data;
import java.util.List;
@Data
public class PessoaDTO {
    private EnderecoDTO endereco;

    private List<TelefoneDTO> telefones;

}
