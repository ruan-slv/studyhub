package com.ruanslv.hexagonal.adapters.outbound.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StringDataProductRepository extends JpaRepository<ProductEntity, Long> {
}