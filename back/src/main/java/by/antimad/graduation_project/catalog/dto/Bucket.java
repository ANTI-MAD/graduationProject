package by.antimad.graduation_project.catalog.dto;

import by.antimad.graduation_project.user.entity.Account;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class Bucket {
    private Long id;
    private Product product;
    private Account account;
    private Boolean isActive;
    private Order order;

}
