// product.service.ts (in product-api)
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'shared-orm/models/product';  
import { Category } from 'shared-orm/models/category';  

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,  
    @InjectModel(Category) private categoryModel: typeof Category,
  ) {}

  async findAll(): Promise<any[]> {
    const products = await this.productModel.findAll();  
  
    
    const productsWithCategory: Array<any> = [];
    
    for (const product of products) {
      const category = await Category.findOne({
        where: { id: product.CategoryId },  
        attributes: ['CategoryName'], 
      });
      
      productsWithCategory.push({
        ...product.get(),  
        CategoryName: category ? category.CategoryName : null,  
      });
    }
  
    return productsWithCategory;
  }

  // Find one product by ID
  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ where: { id } });
  }

  // Create a new product
  async create(createProductDto: any): Promise<Product> {
    return this.productModel.create(createProductDto);  
  }

  // Update a product (optional)
  async update(id: string, updateProductDto: any): Promise<[number, Product[]]> {
    return this.productModel.update(updateProductDto, { where: { id } });
  }

  // Delete a product (optional)
  async remove(id: string): Promise<void> {
    const product = await this.productModel.findOne({ where: { id } });
    if (product) {
      await product.destroy();
    }
  }
}


