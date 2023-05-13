package by.antimad.graduation_project.catalog.controller;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import by.antimad.graduation_project.catalog.service.ProductService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@Data
@RestController
@RequestMapping("/api")
@Slf4j
public class ProductController {
    private final ProductService productService;

    @GetMapping("/catalog")
    public List<Product> getProducts() {
        //productService.getProducts().stream().forEach(productEntity -> log.info(productEntity.));
        return productService.getProducts();
    }
}