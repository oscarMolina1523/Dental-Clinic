/* AUTO-GENERATED-IMPORTS START */
import { injectable, inject } from "tsyringe";
import { IPatientDiseaseRepository } from "../../Domain/repositories/patientDiseaseRepository.interface";
import PatientDisease  from "../../Domain/entities/patientDisease";
/* AUTO-GENERATED-IMPORTS END */

@injectable()
export class PatientDiseaseRepository implements IPatientDiseaseRepository {

  /* AUTO-GENERATED-PROPERTIES START */
  /* AUTO-GENERATED-PROPERTIES END */

  /* AUTO-GENERATED-CONSTRUCTOR START */
  /* AUTO-GENERATED-CONSTRUCTOR END */

  /* AUTO-GENERATED-METHODS START */
  async findAll(page: number = 1, pageSize: number = 100): Promise<PatientDisease[]> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<PatientDisease | null> {
    throw new Error("Method not implemented.");
  }

  async create(data: PatientDisease) : Promise<void>{
    // implementar luego
    throw new Error("Method not implemented.");
  }


  async update(data: PatientDisease): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }

  async delete(data: PatientDisease): Promise<void> {
    // implementar luego
    throw new Error("Method not implemented.");
  }
  /* AUTO-GENERATED-METHODS END */
}
