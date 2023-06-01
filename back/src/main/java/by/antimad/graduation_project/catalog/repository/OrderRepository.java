package by.antimad.graduation_project.catalog.repository;

import by.antimad.graduation_project.catalog.entity.BucketEntity;
import by.antimad.graduation_project.catalog.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
}
