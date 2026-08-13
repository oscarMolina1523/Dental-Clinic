import Product from '../entities/product';

export interface IProductRepository {
  findAll(page: number, pageSize: number): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(data: Product): Promise<void>;
  update(data: Product): Promise<void>;
  delete(data: Product): Promise<void>;
}
