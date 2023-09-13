package com.eloja.core.repository;

import com.eloja.core.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer>  {
}
