/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryLoteRepository } from "../../Domain/repositories/inventoryLoteRepository.interface";
import InventoryLote  from "../../Domain/entities/inventoryLote";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryLoteRepository implements IInventoryLoteRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryLote[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<InventoryLote | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: InventoryLote) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: InventoryLote): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: InventoryLote): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
