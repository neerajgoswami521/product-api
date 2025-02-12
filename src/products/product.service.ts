import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'shared-orm-library/models/product';
import { Category } from 'shared-orm-library/models/category';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
  ) {}

  async getAllProducts() {
    return this.productModel.findAll({ include: [{ model: Category }] });
  }
}
