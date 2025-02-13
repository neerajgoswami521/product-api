// category.service.ts (in product-api)
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'shared-orm/models/category';  // Import Category model

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryModel: typeof Category,  // Inject Category model
  ) {}

  // Find all categories
  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll();  // Get all categories
  }

  // Find one category by ID
  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findOne({ where: { id } });  // Find category by ID
  }

  // Create a new category
  async create(createCategoryDto: any): Promise<Category> {
    return this.categoryModel.create(createCategoryDto);  // Create a new category
  }

  // Update a category (optional)
  async update(id: string, updateCategoryDto: any): Promise<[number, Category[]]> {
    return this.categoryModel.update(updateCategoryDto, { where: { id } });
  }

  // Delete a category (optional)
  async remove(id: string): Promise<void> {
    const category = await this.categoryModel.findOne({ where: { id } });
    if (category) {
      await category.destroy();
    }
  }
}




