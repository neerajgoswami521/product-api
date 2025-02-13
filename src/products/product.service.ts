// product.service.ts (in product-api)
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'shared-orm/models/product';  // Import Product from shared-orm
import { Category } from 'shared-orm/models/category';  // Import Category if needed

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,  // Inject Product model
    @InjectModel(Category) private categoryModel: typeof Category,  // Inject Category model if needed
  ) {}

  // Find all products
  async findAll(): Promise<Product[]> {
    return this.productModel.findAll(
    //   {
    //   include: [
    //     {
    //       model: Category,
    //       attributes: ['CategoryName'],
    //     },
    //   ],
    // }
  );
  }

  // Find one product by ID
  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ where: { id } });  // Find product by ID
  }

  // Create a new product
  async create(createProductDto: any): Promise<Product> {
    return this.productModel.create(createProductDto);  // Create a new product from DTO
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


