package by.antimad.graduation_project.catalog.dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class RequestDTO {
    private Long userId;
    private Product product;
    private Long productId;
    private Long bucketId;
    private List<Bucket> buckets;
}
