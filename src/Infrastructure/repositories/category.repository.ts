/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ICategoryRepository } from "../../Domain/repositories/categoryRepository.interface";
import Category  from "../../Domain/entities/category";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class CategoryRepository implements ICategoryRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Category | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Category) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Category): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Category): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
