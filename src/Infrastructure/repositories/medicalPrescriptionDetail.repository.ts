/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IMedicalPrescriptionDetailRepository } from "../../Domain/repositories/medicalPrescriptionDetailRepository.interface";
import MedicalPrescriptionDetail  from "../../Domain/entities/medicalPrescriptionDetail";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MedicalPrescriptionDetailRepository implements IMedicalPrescriptionDetailRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescriptionDetail[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<MedicalPrescriptionDetail | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: MedicalPrescriptionDetail) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: MedicalPrescriptionDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: MedicalPrescriptionDetail): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
