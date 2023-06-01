package by.antimad.graduation_project.catalog.controller;

import by.antimad.graduation_project.catalog.dto.Bucket;
import by.antimad.graduation_project.catalog.dto.Order;
import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.dto.RequestDTO;
import by.antimad.graduation_project.catalog.entity.OrderEntity;
import by.antimad.graduation_project.catalog.repository.OrderRepository;
import by.antimad.graduation_project.catalog.service.BucketService;
import by.antimad.graduation_project.catalog.service.ProductService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@Data
@RestController
@RequestMapping("/api")
@Slf4j
public class BucketController {
    private final ProductService productService;
    private final BucketService bucketService;
    private final OrderRepository orderRepository;

    @PostMapping("/addToBucket")
    public String addToBucket(@RequestBody RequestDTO requestDTO) {
        bucketService.addToBucket(requestDTO.getProductId(), requestDTO.getUserId());
        return "OK";
    }

    @PostMapping("/getBucket")
    public List<Bucket> getBucket(@RequestBody RequestDTO requestDTO) {
        return bucketService.getBucket(requestDTO.getUserId());
    }

    @PostMapping("/deleteFromBucket")
    public String deleteFromBucket(@RequestBody RequestDTO requestDTO) {
        //System.out.println(requestDTO);
        return bucketService.deleteFromBucket(requestDTO.getBucketId());
    }

    @PostMapping("/createOrder")
    public String createOrder(@RequestBody RequestDTO requestDTO) {
        System.out.println(requestDTO);
        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setStatusId(3L);
        OrderEntity newOrderEntity = orderRepository.save(orderEntity);
        System.out.println(newOrderEntity);
        requestDTO.getBuckets().forEach(bucket -> bucketService.createOrder(bucket.getId(), newOrderEntity));
        return "OK";
    }

    @PostMapping("/getOrders")
    public List<Order> getOrders(@RequestBody RequestDTO requestDTO) {
        return bucketService.getOrders(requestDTO);
    }
}
