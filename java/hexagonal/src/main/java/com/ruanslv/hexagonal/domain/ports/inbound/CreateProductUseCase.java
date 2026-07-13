package com.ruanslv.hexagonal.domain.ports.inbound;

import com.ruanslv.hexagonal.domain.model.Product;

public interface CreateProductUseCase {
    Product execute(Product product);
}
