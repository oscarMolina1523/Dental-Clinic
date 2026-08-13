/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IInventoryMovementRepository } from "../../Domain/repositories/inventoryMovementRepository.interface";
import InventoryMovement  from "../../Domain/entities/inventoryMovement";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class InventoryMovementRepository implements IInventoryMovementRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<InventoryMovement[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<InventoryMovement | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: InventoryMovement) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: InventoryMovement): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: InventoryMovement): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
