package by.antimad.graduation_project.catalog.mapper;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

//@Mapper(componentModel = "spring")
@Component
public class ProductMapper {
    public ProductEntity sourceToDestination(Product source) {
        return new ProductEntity(source.getId(), source.getName(), source.getPrice(), source.getStockBalance(), source.getAccount());
    }
    public Product destinationToSource(ProductEntity destination) {
        return new Product(destination.getId(), destination.getName(), destination.getPrice(), destination.getStockBalance(), destination.getAccount());
    }
}