package com.ruanslv.hexagonal.domain.service;

import java.util.Optional;

import com.ruanslv.hexagonal.domain.model.Product;
import com.ruanslv.hexagonal.domain.ports.inbound.CreateProductUseCase;
import com.ruanslv.hexagonal.domain.ports.inbound.GetProductUseCase;
import com.ruanslv.hexagonal.domain.ports.outbound.ProductOutputPort;

public class ProductService implements CreateProductUseCase, GetProductUseCase {
    private final ProductOutputPort productOutputPort;

    public ProductService(ProductOutputPort productOutputPort) {
        this.productOutputPort = productOutputPort;
    }

    @Override
    public Optional<Product> execute(Long id) {
        return productOutputPort.findById(id);
    }

    @Override
    public Product execute(Product product) {
        return productOutputPort.save(product);
    }
    
}
