package com.ruanslv.hexagonal.domain.ports.inbound;

import java.util.Optional;

import com.ruanslv.hexagonal.domain.model.Product;

public interface GetProductUseCase {
    Optional<Product> execute(Long id);
}
