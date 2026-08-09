/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IMedicalPrescriptionRepository } from "../../Domain/repositories/medicalPrescriptionRepository.interface";
import MedicalPrescription  from "../../Domain/entities/medicalPrescription";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class MedicalPrescriptionRepository implements IMedicalPrescriptionRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<MedicalPrescription[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<MedicalPrescription | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: MedicalPrescription) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: MedicalPrescription): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: MedicalPrescription): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
