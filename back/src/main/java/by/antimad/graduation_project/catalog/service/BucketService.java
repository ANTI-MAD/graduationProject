package by.antimad.graduation_project.catalog.service;

import by.antimad.graduation_project.catalog.dto.Bucket;
import by.antimad.graduation_project.catalog.dto.Order;
import by.antimad.graduation_project.catalog.dto.RequestDTO;
import by.antimad.graduation_project.catalog.entity.BucketEntity;
import by.antimad.graduation_project.catalog.entity.OrderEntity;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import by.antimad.graduation_project.catalog.mapper.BucketMapper;
import by.antimad.graduation_project.catalog.mapper.OrderMapper;
import by.antimad.graduation_project.catalog.repository.BucketRepository;
import by.antimad.graduation_project.catalog.repository.OrderRepository;
import by.antimad.graduation_project.catalog.repository.ProductRepostitory;
import by.antimad.graduation_project.user.entity.Account;
import by.antimad.graduation_project.user.repository.AccountRepository;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
@Service
public class BucketService {
    private final BucketRepository bucketRepository;
    private final ProductRepostitory productRepostitory;
    private final AccountRepository accountRepository;
    private final BucketMapper bucketMapper;
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public void addToBucket(Long productId, Long accountId) {
        BucketEntity bucketEntity = new BucketEntity();
        bucketEntity.setAccount(accountRepository.findById(accountId).get());
        bucketEntity.setProduct(productRepostitory.findById(productId).get());
        bucketEntity.setIsActive(true);
        bucketRepository.save(bucketEntity);
    }

    public List<Bucket> getBucket(Long userId) {
        List<Bucket> buckets = bucketRepository.findAllByAccountId(userId).stream().map(bucketMapper::destinationToSource).collect(Collectors.toList());
        return buckets.stream().filter(Bucket::getIsActive).collect(Collectors.toList());
    }

    public String deleteFromBucket(Long bucketId) {
        bucketRepository.deleteById(bucketId);
        return "OK";
    }

    @Transactional
    public String createOrder(Long bucketId, OrderEntity orderEntity) {
        BucketEntity bucketEntity = bucketRepository.findById(bucketId).get();
        bucketEntity.setIsActive(false);
        bucketEntity.setOrder(orderEntity);
        ProductEntity productEntity = productRepostitory.findById(bucketEntity.getProduct().getId()).get();
        productEntity.setStockBalance(productEntity.getStockBalance() - 1);
        return "OK";
    }

    public List<Order> getOrders(RequestDTO requestDTO) {
        List<Order> orders = orderRepository.findAll().stream()
                .map(orderMapper::destinationToSource)
                .filter(order -> order.getStatusId() == 3)
                .collect(Collectors.toList());
        //int i = 0;
        List<Account> seller = new ArrayList<>();
        for(Order order : orders) {
            List<Bucket> buckets = new ArrayList<>();
            //orders.forEach(order -> buckets.addAll(bucketRepository.findAllByOrderId(order.getId()).stream().collect(Collectors.toList()));
            buckets.addAll(bucketRepository.findAllByOrderId(order.getId()).stream().map(bucketMapper::destinationToSource).collect(Collectors.toList()));
            order.setProducts(buckets.stream()
                    .map(Bucket::getProduct)
                    .filter(product -> Objects.equals(product.getAccount().getId(), requestDTO.getUserId()))
                    .collect(Collectors.toList()));
            seller.addAll(buckets.stream()
                    .filter(bucket -> bucket.getOrder().getId().equals(order.getId()))
                    .map(Bucket::getAccount)
                    .collect(Collectors.toList()));
            //order.setSeller(seller.get(0));
        }
        for (int i = 0; i < orders.size(); i++)
            orders.get(i).setSeller(seller.get(i));
        System.out.println(seller);
        return orders;
    }

}
