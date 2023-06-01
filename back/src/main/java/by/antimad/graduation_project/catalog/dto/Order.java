package by.antimad.graduation_project.catalog.dto;

import by.antimad.graduation_project.user.entity.Account;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class Order {
    Long id;
    Long statusId;
    Account seller;
    List<Product> products;
}
