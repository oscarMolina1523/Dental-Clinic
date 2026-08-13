/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IProductRepository } from "../../Domain/repositories/productRepository.interface";
import Product  from "../../Domain/entities/product";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ProductRepository implements IProductRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Product) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Product): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Product): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
