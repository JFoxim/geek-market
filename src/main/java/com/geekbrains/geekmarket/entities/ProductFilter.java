package com.geekbrains.geekmarket.entities;

import lombok.Data;

@Data
public class ProductFilter {
    private String title;
    private String categoryTitle;
    private double priceMin;
    private double priceMax;
}
