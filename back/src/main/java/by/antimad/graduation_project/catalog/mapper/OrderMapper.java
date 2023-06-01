package by.antimad.graduation_project.catalog.mapper;

import by.antimad.graduation_project.catalog.dto.Order;
import by.antimad.graduation_project.catalog.dto.Product;
import by.antimad.graduation_project.catalog.entity.OrderEntity;
import by.antimad.graduation_project.catalog.entity.ProductEntity;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {
    public OrderEntity sourceToDestination(Order source) {
        if (source != null) {
            return new OrderEntity(source.getId(), source.getStatusId());
        } else return null;
    }
    public Order destinationToSource(OrderEntity destination) {
        if (destination != null) {
            Order order = new Order();
            order.setId(destination.getId());
            order.setStatusId(destination.getStatusId());
            return order;
        } else return null;

    }
}
