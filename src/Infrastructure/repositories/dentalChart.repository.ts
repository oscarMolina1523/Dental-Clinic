/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDentalChartRepository } from "../../Domain/repositories/dentalChartRepository.interface";
import DentalChart  from "../../Domain/entities/dentalChart";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DentalChartRepository implements IDentalChartRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<DentalChart[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<DentalChart | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: DentalChart) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: DentalChart): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: DentalChart): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
