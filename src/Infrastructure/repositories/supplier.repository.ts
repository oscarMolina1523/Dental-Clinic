/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ISupplierRepository } from "../../Domain/repositories/supplierRepository.interface";
import Supplier  from "../../Domain/entities/supplier";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class SupplierRepository implements ISupplierRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Supplier[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Supplier | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Supplier) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Supplier): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Supplier): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
