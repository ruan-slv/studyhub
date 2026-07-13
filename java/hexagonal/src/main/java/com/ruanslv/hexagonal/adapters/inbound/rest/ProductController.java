package com.ruanslv.hexagonal.adapters.inbound.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ruanslv.hexagonal.adapters.inbound.rest.dto.ProductRequest;
import com.ruanslv.hexagonal.adapters.inbound.rest.dto.ProductResponse;
import com.ruanslv.hexagonal.domain.model.Product;
import com.ruanslv.hexagonal.domain.ports.inbound.CreateProductUseCase;
import com.ruanslv.hexagonal.domain.ports.inbound.GetProductUseCase;

@RestController
@RequestMapping("/products")
public class ProductController{
    private final CreateProductUseCase createProductUseCase;
    private final GetProductUseCase getProductUseCase;
    
    public ProductController(CreateProductUseCase createProductUseCase, GetProductUseCase getProductUseCase){
        this.createProductUseCase = createProductUseCase;
        this.getProductUseCase = getProductUseCase;
    }

    @PostMapping
    public ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest request){
        Product productInput = new Product(null, request.getName(), request.getPrice());
        Product saveProduct = createProductUseCase.execute(productInput);
        ProductResponse response = new ProductResponse(saveProduct.getId(), saveProduct.getName(), saveProduct.getPrice());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable Long id){
        return getProductUseCase.execute(id)
            .map(product -> new ProductResponse(product.getId(), product.getName(), product.getPrice()))
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
