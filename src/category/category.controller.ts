// category.controller.ts (in product-api)
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'shared-orm/models/category';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Fetch all categories
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();  // Calls the findAll method in CategoryService
  }

  // Fetch a category by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);  // Calls the findOne method in CategoryService
  }

  // Create a new category
  @Post()
  async create(@Body() createCategoryDto: any): Promise<Category> {
    return this.categoryService.create(createCategoryDto);  // Calls the create method in CategoryService
  }
}


