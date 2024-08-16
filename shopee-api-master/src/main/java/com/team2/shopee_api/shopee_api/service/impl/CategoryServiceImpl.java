package com.team2.shopee_api.shopee_api.service.impl;

import com.team2.shopee_api.shopee_api.enity.CategoryEntity;
import com.team2.shopee_api.shopee_api.repository.CategoryRepository;
import com.team2.shopee_api.shopee_api.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryEntity> findAllCategories() {
        return (List<CategoryEntity>) categoryRepository.findAll();
    }
}
