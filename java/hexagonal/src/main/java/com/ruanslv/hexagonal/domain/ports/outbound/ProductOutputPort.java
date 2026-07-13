package com.ruanslv.hexagonal.domain.ports.outbound;

import java.util.Optional;

import com.ruanslv.hexagonal.domain.model.Product;

public interface ProductOutputPort {
    Product save(Product product);
    Optional<Product> findById(Long id);
}