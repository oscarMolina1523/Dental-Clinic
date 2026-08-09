/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDiseaseRepository } from "../../Domain/repositories/diseaseRepository.interface";
import Disease  from "../../Domain/entities/disease";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DiseaseRepository implements IDiseaseRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Disease[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Disease | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Disease) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Disease): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Disease): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
