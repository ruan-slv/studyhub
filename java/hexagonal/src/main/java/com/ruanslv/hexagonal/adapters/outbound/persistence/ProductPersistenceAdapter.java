package com.ruanslv.hexagonal.adapters.outbound.persistence;

import java.util.Optional;

import org.springframework.stereotype.Component;

import com.ruanslv.hexagonal.domain.model.Product;
import com.ruanslv.hexagonal.domain.ports.outbound.ProductOutputPort;

@Component
public class ProductPersistenceAdapter implements ProductOutputPort {
    private final StringDataProductRepository repository;

    public ProductPersistenceAdapter(StringDataProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public Product save(Product product) {
        ProductEntity entityToSave = new ProductEntity(product.getId(), product.getName(), product.getPrice());
        ProductEntity savedEntity = this.repository.save(entityToSave);
        return new Product(savedEntity.getId(), savedEntity.getName(), savedEntity.getPrice());
    }

    @Override
    public Optional<Product> findById(Long id) {
        return this.repository.findById(id)
            .map(entity -> new Product(entity.getId(), entity.getName(), entity.getPrice()));
    }
}
