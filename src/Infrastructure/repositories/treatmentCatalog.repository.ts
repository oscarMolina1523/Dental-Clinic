/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ITreatmentCatalogRepository } from "../../Domain/repositories/treatmentCatalogRepository.interface";
import TreatmentCatalog  from "../../Domain/entities/treatmentCatalog";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentCatalogRepository implements ITreatmentCatalogRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentCatalog[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<TreatmentCatalog | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: TreatmentCatalog) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: TreatmentCatalog): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: TreatmentCatalog): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
