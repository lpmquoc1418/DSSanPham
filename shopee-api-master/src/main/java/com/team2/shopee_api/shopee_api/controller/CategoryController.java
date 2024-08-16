package com.team2.shopee_api.shopee_api.controller;

import com.team2.shopee_api.shopee_api.enity.CategoryEntity;
import com.team2.shopee_api.shopee_api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    ResponseEntity<?> findAll(){
        List<CategoryEntity> categoryList = categoryService.findAllCategories();
        return ResponseEntity.ok(categoryList);
    }
}
