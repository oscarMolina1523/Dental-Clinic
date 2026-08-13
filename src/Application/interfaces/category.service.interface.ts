import Category from "../../Domain/entities/category";
import { CategoryDto } from './../dtos/category.dto';

export interface ICategoryService {
  findAll(page: number, pageSize: number): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  create(data: CategoryDto): Promise<Category>;
  update(id: string, data: CategoryDto): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
