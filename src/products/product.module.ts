// product.module.ts (in product-api)
import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from 'shared-orm/models/product';
import { Category } from 'shared-orm/models/category';
import { CategoryModule } from '../category/category.module';  
@Module({
  imports: [
    SequelizeModule.forFeature([Product, Category]),
    forwardRef(() => CategoryModule),  
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}






