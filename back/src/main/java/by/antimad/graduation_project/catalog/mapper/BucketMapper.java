package by.antimad.graduation_project.catalog.mapper;

import by.antimad.graduation_project.catalog.dto.Bucket;
import by.antimad.graduation_project.catalog.entity.BucketEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BucketMapper {
    private final ProductMapper productMapper;
    private final OrderMapper orderMapper;

    public BucketEntity sourceToDestination(Bucket source) {
        return new BucketEntity(source.getId(),
                productMapper.sourceToDestination(source.getProduct()),
                source.getAccount(),
                source.getIsActive(),
                orderMapper.sourceToDestination(source.getOrder()));
    }
    public Bucket destinationToSource(BucketEntity destination) {
        return new Bucket(destination.getId(),
                productMapper.destinationToSource(destination.getProduct()),
                destination.getAccount(),
                destination.getIsActive(),
                orderMapper.destinationToSource(destination.getOrder()));
    }
}
