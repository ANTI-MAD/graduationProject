package by.antimad.graduation_project.catalog.repository;

import by.antimad.graduation_project.catalog.entity.BucketEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BucketRepository extends JpaRepository<BucketEntity, Long> {
    List<BucketEntity> findAllByAccountId(Long accountId);
    List<BucketEntity> findAllByOrderId(Long orderId);

}
