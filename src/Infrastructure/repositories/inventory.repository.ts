/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryRepository } from "../../Domain/repositories/inventoryRepository.interface";
import Inventory  from "../../Domain/entities/inventory";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryRepository implements IInventoryRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Inventory[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Inventory | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Inventory) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Inventory): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Inventory): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
