package by.antimad.graduation_project.catalog.dto;

import by.antimad.graduation_project.user.entity.Account;
import lombok.*;

import java.util.Currency;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class Product {
    private Long id;
    private String name;
    private Float price;
    private Integer stockBalance;
    private Account account;
}
