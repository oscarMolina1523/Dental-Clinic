/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IClinicalProgresRepository } from "../../Domain/repositories/clinicalProgresRepository.interface";
import ClinicalProgres  from "../../Domain/entities/clinicalProgres";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class ClinicalProgresRepository implements IClinicalProgresRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<ClinicalProgres[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<ClinicalProgres | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: ClinicalProgres) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: ClinicalProgres): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: ClinicalProgres): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
