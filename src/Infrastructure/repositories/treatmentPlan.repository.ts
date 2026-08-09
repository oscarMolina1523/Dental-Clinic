/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { ITreatmentPlanRepository } from "../../Domain/repositories/treatmentPlanRepository.interface";
import TreatmentPlan  from "../../Domain/entities/treatmentPlan";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class TreatmentPlanRepository implements ITreatmentPlanRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<TreatmentPlan[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<TreatmentPlan | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: TreatmentPlan) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: TreatmentPlan): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: TreatmentPlan): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
