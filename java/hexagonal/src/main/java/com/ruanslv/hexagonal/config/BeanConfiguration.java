package com.ruanslv.hexagonal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.ruanslv.hexagonal.adapters.outbound.persistence.ProductPersistenceAdapter;
import com.ruanslv.hexagonal.domain.service.ProductService;

@Configuration
public class BeanConfiguration {
    @Bean
    public ProductService productService(ProductPersistenceAdapter productPersistenceAdapter) {
        return new ProductService(productPersistenceAdapter);
    }   
}