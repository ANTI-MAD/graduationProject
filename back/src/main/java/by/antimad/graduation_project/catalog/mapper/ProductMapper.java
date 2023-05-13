package by.antimad.graduation_project.catalog.mapper;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductEntity sourceToDestination(Product source);
    Product destinationToSource(ProductEntity destination);
}