package by.antimad.graduation_project.catalog.controller;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.dto.RequestDTO;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import by.antimad.graduation_project.catalog.service.ProductService;
import by.antimad.graduation_project.user.repository.AccountRepository;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
        return productService.getProducts();
    }

    @PostMapping("/addProduct")
    public String addProduct(@RequestBody RequestDTO requestDTO) {
        productService.addProduct(requestDTO);
        return "OK";
    }
}