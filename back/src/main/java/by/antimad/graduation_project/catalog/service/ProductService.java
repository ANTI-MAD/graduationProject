package by.antimad.graduation_project.catalog.service;

import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.dto.RequestDTO;
import by.antimad.graduation_project.catalog.mapper.ProductMapper;
import by.antimad.graduation_project.catalog.repository.ProductRepostitory;
import by.antimad.graduation_project.user.repository.AccountRepository;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Data
@Service
public class ProductService {
    private final ProductRepostitory productRepostitory;
    private final ProductMapper productMapper;
    private final AccountRepository accountRepository;

    public List<Product> getProducts() {
        return productRepostitory.findAll().stream().map(productMapper::destinationToSource).collect(Collectors.toList());
    }

    public void addProduct(RequestDTO requestDTO) {
        requestDTO.getProduct().setAccount(accountRepository.findById(requestDTO.getUserId()).get());
        productRepostitory.save(productMapper.sourceToDestination(requestDTO.getProduct()));
    }
}