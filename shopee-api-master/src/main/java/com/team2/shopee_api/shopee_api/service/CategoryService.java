package com.team2.shopee_api.shopee_api.service;

import com.team2.shopee_api.shopee_api.enity.CategoryEntity;
import com.team2.shopee_api.shopee_api.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CategoryService {
    List<CategoryEntity> findAllCategories();
}
