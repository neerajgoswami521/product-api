import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'shared-orm-library/models/product';
import { Category } from 'shared-orm-library/models/category';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Product, Category], // Import models from shared ORM
      autoLoadModels: true,
      synchronize: false, // Use migrations instead
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
