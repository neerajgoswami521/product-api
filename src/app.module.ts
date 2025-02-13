import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './products/product.module';
import { CategoryModule } from './category/category.module';
import { Product } from 'shared-orm/models/product';
import { Category } from 'shared-orm/models/category';
// import { Product, Category } from 'shared-orm';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'MyStore',
      models: [Product, Category], // Register your models here
      autoLoadModels: true, // Automatically load models
      synchronize: true, // Set to false in production for migrations
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}

