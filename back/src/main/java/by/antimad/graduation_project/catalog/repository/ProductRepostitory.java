package by.antimad.graduation_project.catalog.repository;

import by.antimad.graduation_project.catalog.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepostitory extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByName(String name);
}
