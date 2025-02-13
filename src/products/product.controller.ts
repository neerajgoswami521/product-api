// product.controller.ts (in product-api)
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'shared-orm/models/product';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Fetch all products
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();  // Calls the findAll method in ProductService
  }

  // Fetch a product by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);  // Calls the findOne method in ProductService
  }

  // Create a new product
  @Post()
  async create(@Body() createProductDto: any): Promise<Product> {
    return this.productService.create(createProductDto);  // Calls the create method in ProductService
  }
}


