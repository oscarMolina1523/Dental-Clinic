/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ITreatmentPlanDetailRepository } from "../../Domain/repositories/treatmentPlanDetailRepository.interface";
import TreatmentPlanDetail  from "../../Domain/entities/treatmentPlanDetail";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentPlanDetailRepository implements ITreatmentPlanDetailRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlanDetail[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<TreatmentPlanDetail | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: TreatmentPlanDetail) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: TreatmentPlanDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: TreatmentPlanDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
