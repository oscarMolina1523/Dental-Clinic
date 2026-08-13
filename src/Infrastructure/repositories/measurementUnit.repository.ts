/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IMeasurementUnitRepository } from "../../Domain/repositories/measurementUnitRepository.interface";
import MeasurementUnit  from "../../Domain/entities/measurementUnit";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MeasurementUnitRepository implements IMeasurementUnitRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<MeasurementUnit[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<MeasurementUnit | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: MeasurementUnit) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: MeasurementUnit): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: MeasurementUnit): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
