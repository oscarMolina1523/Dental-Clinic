import Product from "../../Domain/entities/product";
import { ProductDto } from './../dtos/product.dto';

export interface IProductService {
  findAll(page: number, pageSize: number): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(data: ProductDto): Promise<Product>;
  update(id: string, data: ProductDto): Promise<Product | null>;
  delete(id: string): Promise<void>;
}
