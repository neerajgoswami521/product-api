// category.module.ts (in product-api)
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from 'shared-orm/models/category';

@Module({
  imports: [SequelizeModule.forFeature([Category])],  // Include Category model
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}




