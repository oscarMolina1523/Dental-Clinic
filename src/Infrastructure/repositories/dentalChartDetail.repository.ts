/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IDentalChartDetailRepository } from "../../Domain/repositories/dentalChartDetailRepository.interface";
import DentalChartDetail  from "../../Domain/entities/dentalChartDetail";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class DentalChartDetailRepository implements IDentalChartDetailRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<DentalChartDetail[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<DentalChartDetail | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: DentalChartDetail) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: DentalChartDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: DentalChartDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
