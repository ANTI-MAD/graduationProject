package by.antimad.graduation_project.catalog.entity;

import by.antimad.graduation_project.user.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Currency;

@Entity(name = "product")
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String name;

    private Float price;
    private Integer stockBalance;
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}
