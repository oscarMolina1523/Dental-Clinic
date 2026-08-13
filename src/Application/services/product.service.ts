import { inject, injectable } from "tsyringe";
import { IProductService } from "../interfaces/product.service.interface";
import { IProductRepository } from "../../Domain/repositories/productRepository.interface";
import { ProductDto } from "../dtos/product.dto";
import Product from "../../Domain/entities/product";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ProductService implements IProductService {
  private readonly _productRepository: IProductRepository;

  constructor(@inject("IProductRepository") repository: IProductRepository) {
    this._productRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Product[]> {
    return await this._productRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Product | null> {
    return await this._productRepository.findById(id);
  }
  
  async create(data: ProductDto): Promise<Product> {
    const newData: Product = {
      ...data,
      id: generateId(), 
    }
    await this._productRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ProductDto): Promise<Product | null> {
    const existing = await this._productRepository.findById(id);
    if (!existing) {
      return null;
    }

    const newData: Product = {
      ...data,
      id,
    }
    await this._productRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._productRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._productRepository.delete(existing);
  }
}
