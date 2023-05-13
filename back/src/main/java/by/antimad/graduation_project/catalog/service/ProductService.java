package by.antimad.graduation_project.catalog.service;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.mapper.ProductMapper;
import by.antimad.graduation_project.catalog.repository.ProductRepostitory;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Service
public class ProductService {
    private final ProductRepostitory productRepostitory;
    private final ProductMapper productMapper;

    public List<Product> getProducts() {
        return productRepostitory.findAll().stream().map(productMapper::destinationToSource).collect(Collectors.toList());
    }
}