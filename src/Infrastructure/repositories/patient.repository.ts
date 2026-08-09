/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPatientRepository } from "../../Domain/repositories/patientRepository.interface";
import Patient  from "../../Domain/entities/patient";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PatientRepository implements IPatientRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<Patient[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<Patient | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: Patient) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: Patient): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: Patient): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
