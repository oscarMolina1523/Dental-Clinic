import Category from '../entities/category';

export interface ICategoryRepository {
  findAll(page: number, pageSize: number): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  create(data: Category): Promise<void>;
  update(data: Category): Promise<void>;
  delete(data: Category): Promise<void>;
}
