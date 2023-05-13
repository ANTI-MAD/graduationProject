package by.antimad.graduation_project.catalog.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Product {
    private Integer id;
    private String name;
    private Integer price;
    private Integer stockBalance;
}
